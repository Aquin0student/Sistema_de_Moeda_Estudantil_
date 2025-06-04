const Vantagem = require('../Models/Vantagem')
const VantagemFactory = require('../Factories/VantagemFactory')
const Cupom = require('../Models/Cupom')
const CupomFactory = require('../Factories/CupomFactory')

module.exports = {
    async criarCupom(req, res){
        try{
            const { vantagemId, alunoId, status } = req.body

            if(!vantagemId || !alunoId || !status){
                return res.status(400).json({ error: 'Preencha todos os campos' });
            }

            const vantagem = Vantagem.findByPk(vantagemId)

            if(!vantagem){
                return res.status(404).json({ error: 'Vantagem não encontrada.' });
            }

            const cupom = await CupomFactory.createCupom({
                vantagemId: vantagemId,
                alunoId: alunoId,
                status: status
            })

            return res.status(200).json({
                message: 'Cupom criado com sucesso',
                cupom: cupom.codigo,
                vantagemId: vantagemId,
                alunoId: alunoId
            });

        }catch (error){
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({
                error: 'Erro ao criar usuário.',
                message: error.message,
                details: error.errors
  });
    }
    }
}