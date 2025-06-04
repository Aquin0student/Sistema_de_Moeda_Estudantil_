const Empresa = require('../Models/EmpresaParceira')
const Vantagem = require('../Models/Vantagem')
const VantagemFactory = require('../Factories/VantagemFactory')

module.exports = {
    async cadastrarVantagem(req, res){
        try{
            const empresaId = req.session.usuarioId;

            if(!empresaId){
                return res.status(401).json({ error: 'Usuário não autenticado' });
            }

            const empresa = Empresa.findByPk(empresaId)

            if(!empresa){
                return res.status(400).json({ error: 'Erro ao buscar empresa' });
            }

            const { descricao, custoMoedas } = req.body

            if(!descricao || !custoMoedas){
                return res.status(400).json({ error: 'Preencha todos os campos' });
            }

            const vantagem = await VantagemFactory.createVantagem({
                descricao: descricao,
                custoMoedas: custoMoedas,
                empresaParceiraId: empresaId
            })

            return res.status(200).json({
                message: 'Vantagem criada com sucesso',
                vantagem: vantagem.descricao,
                empresaId: empresaId
    });

        }catch (error){
            console.error('Erro ao criar vantagem:', error);
            return res.status(500).json({
                error: 'Erro ao criar vantagem.',
                message: error.message,
                details: error.errors
    });
  }
    }
}