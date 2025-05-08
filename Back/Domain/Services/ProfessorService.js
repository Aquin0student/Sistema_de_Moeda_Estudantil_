const { Professor } = require('../../Domain/Entities');
const ProfessorDTO = require('../DTOs/ProfessorDTO');
const ProfessorFactory = require('../../Domain/Factories/ProfessorFactory');

class ProfessorService {
    async criarProfessor(data) {
        const entity = ProfessorFactory.criar(data);
        const novo = await Professor.create(entity);
        return new ProfessorDTO(novo);
    }

    async listarProfessores() {
        const professores = await Professor.findAll();
        return professores.map(p => new ProfessorDTO(p));
    }

    async obterProfessorPorId(id) {
        const professor = await Professor.findByPk(id);
        if (!professor) return null;
        return new ProfessorDTO(professor);
    }

    async atualizarProfessor(id, data) {
        await Professor.update(data, { where: { id } });
        const atualizado = await Professor.findByPk(id);
        return new ProfessorDTO(atualizado);
    }

    async deletarProfessor(id) {
        return await Professor.destroy({ where: { id } });
    }
}

module.exports = new ProfessorService();