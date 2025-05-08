const { EmpresaParceira } = require('../../Domain/Entities');
const EmpresaParceiraDTO = require('../DTOs/EmpresaParceiraDTO');
const EmpresaParceiraFactory = require('../../Domain/Factories/EmpresaParceiraFactory');

class EmpresaParceiraService {
    async criarEmpresa(data) {
        const entity = EmpresaParceiraFactory.criar(data);
        const nova = await EmpresaParceira.create(entity);
        return new EmpresaParceiraDTO(nova);
    }

    async listarEmpresas() {
        const empresas = await EmpresaParceira.findAll();
        return empresas.map(e => new EmpresaParceiraDTO(e));
    }

    async obterEmpresaPorId(id) {
        const empresa = await EmpresaParceira.findByPk(id);
        if (!empresa) return null;
        return new EmpresaParceiraDTO(empresa);
    }

    async atualizarEmpresa(id, data) {
        await EmpresaParceira.update(data, { where: { id } });
        const atualizada = await EmpresaParceira.findByPk(id);
        return new EmpresaParceiraDTO(atualizada);
    }

    async deletarEmpresa(id) {
        return await EmpresaParceira.destroy({ where: { id } });
    }
}

module.exports = new EmpresaParceiraService();