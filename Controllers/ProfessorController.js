const Professor = require('../Models/Professor');
const Aluno = require('../Models/Aluno')
const {consultarExtrato} = require("./AlunoController");
const Transacao = require('../Models/Transacao')
const TransacaoFactory = require('../Factories/TransacaoFactory')

module.exports = {
  async consultarExtrato(req, res) {
    try {
        const usuarioId = req.session.usuarioId;

        if (!usuarioId) {
            return res.status(401).json({ error: 'Usuário não autenticado' });
        }

        const professor = await Professor.findByPk(usuarioId);

        if (!professor) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }

        return res.status(200).json({
            saldoMoedas: professor.saldoMoedas
        });

    } catch (error) {
      console.error('Erro ao buscar saldo do professor:', error);
      return res.status(400).json({ error: error.message });
    }
  },

    async distribuirMoedas(req, res) {
  try {
    const dataAtual = new Date();
    const dataAtualFormatada = dataAtual.toLocaleString();

    const usuarioId = req.session.usuarioId;

    if (!usuarioId) {
      return res.status(401).json({ error: 'Usuário não autenticado' });
    }

    const professor = await Professor.findByPk(usuarioId);

    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }

    const { alunoId, moedas, motivo } = req.body;

    if (!alunoId || !moedas || !motivo) {
      return res.status(400).json({ error: 'Preencha todos os campos' });
    }

    const aluno = await Aluno.findByPk(alunoId);

    if (!aluno) {
      return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    if (professor.saldoMoedas < moedas) {
      return res.status(400).json({ error: 'Saldo insuficiente' });
    }

    await TransacaoFactory.createTransacao({
      data: dataAtualFormatada,
      valor: moedas,
      motivo,
      professorId: professor.id,
      alunoId
    });

    professor.saldoMoedas -= moedas;
    aluno.saldoMoedas += moedas;

    await professor.save();
    await aluno.save();

    return res.status(200).json({
      message: 'Moedas distribuídas com sucesso',
      saldoProfessor: professor.saldoMoedas,
      saldoAluno: aluno.saldoMoedas
    });

  } catch (error) {
    console.error('Erro ao distribuir moedas:', error);
    return res.status(500).json({
      error: 'Erro ao distribuir moedas.',
      message: error.message,
      details: error.errors
    });
  }
}

};
