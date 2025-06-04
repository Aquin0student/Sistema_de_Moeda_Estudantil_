const Empresa = require('../Models/EmpresaParceira')
const Vantagem = require('../Models/Vantagem')

class VantagemFactory{
    static async createVantagem({ descricao, custoMoedas, empresaParceiraId }){

        const empresaParceira = await Empresa.findByPk(empresaParceiraId)

        if(!empresaParceira){
            throw new Error('Empresa não encontrada');
        }

        return await Vantagem.create({
            descricao: descricao,
            custoMoedas: custoMoedas,
            empresaParceiraId: empresaParceiraId
        })

    }
}

module.exports = VantagemFactory