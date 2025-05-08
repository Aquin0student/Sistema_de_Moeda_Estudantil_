const Aluno = require('../Entities/Aluno');

class AlunoFactory {
    static create(data) {
        return Aluno.build(data);
    }
}

module.exports = AlunoFactory;
