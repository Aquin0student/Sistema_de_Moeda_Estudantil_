const AlunoFactory = require('../Factories/AlunoFactory');
const Aluno = require('../Models/Aluno');
const Vantagem = require('../Models/Vantagem')
const CupomFactory = require("../Factories/CupomFactory");

module.exports = {
  async criar(req, res) {
    try {
      const aluno = await AlunoFactory.createAndSave(req.body);
      res.status(201).json(aluno);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async listar(req, res) {
    try {
      const alunos = await Aluno.findAll();
      res.status(200).json(alunos);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async obterPorId(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
      res.status(200).json(aluno);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });

      await aluno.update(req.body);
      res.status(200).json(aluno);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async deletar(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });

      await aluno.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async consultarExtrato(req, res){
    try{
      const usuarioId = req.session.usuarioId;

      if(!usuarioId){
        return res.status(401).json({ error: 'Usuário não autenticado' });
      }

      const aluno = await Aluno.findByPk(usuarioId)

      if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

      return res.status(200).json({
      saldoMoedas: aluno.saldoMoedas

    });

    }catch(error){
      console.error('Erro ao consultar saldo:', error);
      res.status(400).json({ error: error.message });
    }
  },

  async resgatarVantagem(req, res){
    try{
      const usuarioId = req.session.usuarioId;

      if(!usuarioId){
        return res.status(401).json({ error: 'Usuário não autenticado' });
      }

      const aluno = await Aluno.findByPk(usuarioId)

      if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
      }

      const { vantagemId } = req.body

      if(!vantagemId){
        return res.status(400).json({ error: 'Preencha todos os campos' });
      }

      const vantagem = Vantagem.findByPk(vantagemId)

      if(!vantagem){
        return res.status(404).json({ error: 'Vantagem não encontrada' });
      }

      const cupom = await CupomFactory.createCupom({
                  vantagemId: vantagemId,
                  alunoId: usuarioId,
                  status: "Ativo"
              })

      const custo = vantagem.custoMoedas



    return res.status(200).json({
                message: 'Cupom criado com sucesso',
                cupom: cupom.codigo,
                vantagemId: vantagemId,
                alunoId: usuarioId
            });

    }catch (error){
            console.error('Erro ao criar cupom:', error);
            return res.status(500).json({
                error: 'Erro ao criar cupom.',
                message: error.message,
                details: error.errors
  });
    }

  }
};
