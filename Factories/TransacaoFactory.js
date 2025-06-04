const Aluno = require('../Models/Aluno');
const Usuario = require("../Models/Usuario");
const Transacao = require('../Models/Transacao')
const Professor = require('../Models/Professor');

class TransacaoFactory{
    static async createTransacao({data, valor, motivo, professorId, alunoId}){
        return await Transacao.create({data, valor, motivo, professorId, alunoId})
    }
}

module.exports = TransacaoFactory