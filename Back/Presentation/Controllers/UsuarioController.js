const UsuarioService = require('../../Application/Services/UsuarioService');

module.exports = {
    async criar(req, res) {
        try {
            const usuario = await UsuarioService.criar(req.body);
            res.status(201).json(usuario);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async listar(req, res) {
        try {
            const usuarios = await UsuarioService.listar();
            res.status(200).json(usuarios);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async obterPorId(req, res) {
        try {
            const usuario = await UsuarioService.obterPorId(req.params.id);
            if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
            res.status(200).json(usuario);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async atualizar(req, res) {
        try {
            const usuario = await UsuarioService.atualizar(req.params.id, req.body);
            res.status(200).json(usuario);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async deletar(req, res) {
        try {
            await UsuarioService.deletar(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
};
