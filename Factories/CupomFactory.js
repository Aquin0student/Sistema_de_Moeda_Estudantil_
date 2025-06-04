const Cupom = require('../Models/Cupom')

class CupomFactory{
    static async createCupom({ vantagemId, alunoId, status }){
        return await Cupom.create({vantagemId: vantagemId, alunoId: alunoId, status: status})
    }
}

module.exports = CupomFactory