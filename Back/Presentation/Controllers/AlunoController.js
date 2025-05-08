const AlunoService = require('../../Application/Services/AlunoService');

module.exports = {
    async criar(req, res) {
        try {
            const aluno = await AlunoService.criar(req.body);
            res.status(201).json(aluno);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async listar(req, res) {
        try {
            const alunos = await AlunoService.listar();
            res.status(200).json(alunos);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async obterPorId(req, res) {
        try {
            const aluno = await AlunoService.obterPorId(req.params.id);
            if (!aluno) return res.status(404).json({ erro: 'Aluno não encontrado' });
            res.status(200).json(aluno);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async atualizar(req, res) {
        try {
            const aluno = await AlunoService.atualizar(req.params.id, req.body);
            res.status(200).json(aluno);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async deletar(req, res) {
        try {
            await AlunoService.deletar(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
};
