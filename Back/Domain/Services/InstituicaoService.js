const { Instituicao } = require('../../Domain/Entities');
const InstituicaoDTO = require('../DTOs/InstituicaoDTO');
const InstituicaoFactory = require('../../Domain/Factories/InstituicaoFactory');

class InstituicaoService {
    async criarInstituicao(data) {
        const entity = InstituicaoFactory.criar(data);
        const nova = await Instituicao.create(entity);
        return new InstituicaoDTO(nova);
    }

    async listarInstituicoes() {
        const instituicoes = await Instituicao.findAll();
        return instituicoes.map(i => new InstituicaoDTO(i));
    }

    async obterInstituicaoPorId(id) {
        const instituicao = await Instituicao.findByPk(id);
        if (!instituicao) return null;
        return new InstituicaoDTO(instituicao);
    }

    async atualizarInstituicao(id, data) {
        await Instituicao.update(data, { where: { id } });
        const atualizada = await Instituicao.findByPk(id);
        return new InstituicaoDTO(atualizada);
    }

    async deletarInstituicao(id) {
        return await Instituicao.destroy({ where: { id } });
    }
}

module.exports = new InstituicaoService();
