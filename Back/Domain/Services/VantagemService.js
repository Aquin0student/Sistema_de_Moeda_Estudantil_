const { Vantagem } = require('../../Domain/Entities');
const VantagemDTO = require('../DTOs/VantagemDTO');
const VantagemFactory = require('../../Domain/Factories/VantagemFactory');

class VantagemService {
    async criarVantagem(data) {
        const entity = VantagemFactory.criar(data);
        const nova = await Vantagem.create(entity);
        return new VantagemDTO(nova);
    }

    async listarVantagens() {
        const vantagens = await Vantagem.findAll();
        return vantagens.map(v => new VantagemDTO(v));
    }

    async obterVantagemPorId(id) {
        const vantagem = await Vantagem.findByPk(id);
        if (!vantagem) return null;
        return new VantagemDTO(vantagem);
    }

    async atualizarVantagem(id, data) {
        await Vantagem.update(data, { where: { id } });
        const atualizada = await Vantagem.findByPk(id);
        return new VantagemDTO(atualizada);
    }

    async deletarVantagem(id) {
        return await Vantagem.destroy({ where: { id } });
    }
}

module.exports = new VantagemService();