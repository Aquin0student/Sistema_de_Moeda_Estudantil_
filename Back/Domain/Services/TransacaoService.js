const { Transacao } = require('../../Domain/Entities');
const TransacaoDTO = require('../DTOs/TransacaoDTO');
const TransacaoFactory = require('../../Domain/Factories/TransacaoFactory');

class TransacaoService {
    async criarTransacao(data) {
        const entity = TransacaoFactory.criar(data);
        const nova = await Transacao.create(entity);
        return new TransacaoDTO(nova);
    }

    async listarTransacoes() {
        const transacoes = await Transacao.findAll();
        return transacoes.map(t => new TransacaoDTO(t));
    }

    async obterTransacaoPorId(id) {
        const transacao = await Transacao.findByPk(id);
        if (!transacao) return null;
        return new TransacaoDTO(transacao);
    }

    async atualizarTransacao(id, data) {
        await Transacao.update(data, { where: { id } });
        const atualizada = await Transacao.findByPk(id);
        return new TransacaoDTO(atualizada);
    }

    async deletarTransacao(id) {
        return await Transacao.destroy({ where: { id } });
    }
}

module.exports = new TransacaoService();