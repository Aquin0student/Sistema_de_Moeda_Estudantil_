const Aluno = require('../../Domain/Entities/Aluno');
const AlunoFactory = require('../../Domain/Factories/AlunoFactory');

class AlunoService {
    async create(data) {
        const aluno = AlunoFactory.create(data);
        return await aluno.save();
    }

    async findById(id) {
        return await Aluno.findByPk(id);
    }

    async findAll() {
        return await Aluno.findAll();
    }

    async update(id, data) {
        const aluno = await Aluno.findByPk(id);
        if (!aluno) throw new Error('Aluno não encontrado');
        return await aluno.update(data);
    }

    async delete(id) {
        const aluno = await Aluno.findByPk(id);
        if (!aluno) throw new Error('Aluno não encontrado');
        return await aluno.destroy();
    }
}

module.exports = new AlunoService();
