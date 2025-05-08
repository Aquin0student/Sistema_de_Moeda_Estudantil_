const EmpresaParceiraService = require('../../Application/Services/EmpresaParceiraService');

module.exports = {
    async criar(req, res) {
        try {
            const empresa = await EmpresaParceiraService.criar(req.body);
            res.status(201).json(empresa);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async listar(req, res) {
        try {
            const empresas = await EmpresaParceiraService.listar();
            res.status(200).json(empresas);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async obterPorId(req, res) {
        try {
            const empresa = await EmpresaParceiraService.obterPorId(req.params.id);
            if (!empresa) return res.status(404).json({ erro: 'Empresa não encontrada' });
            res.status(200).json(empresa);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async atualizar(req, res) {
        try {
            const empresa = await EmpresaParceiraService.atualizar(req.params.id, req.body);
            res.status(200).json(empresa);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async deletar(req, res) {
        try {
            await EmpresaParceiraService.deletar(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
};
