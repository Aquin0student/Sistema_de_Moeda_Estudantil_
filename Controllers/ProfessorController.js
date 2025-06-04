const ProfessorService = require('../../Application/Services/ProfessorService');

module.exports = {
    async criar(req, res) {
        try {
            const professor = await ProfessorService.criar(req.body);
            res.status(201).json(professor);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async listar(req, res) {
        try {
            const professores = await ProfessorService.listar();
            res.status(200).json(professores);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async obterPorId(req, res) {
        try {
            const professor = await ProfessorService.obterPorId(req.params.id);
            if (!professor) return res.status(404).json({ erro: 'Professor não encontrado' });
            res.status(200).json(professor);
        } catch (err) {
            res.status(500).json({ erro: err.message });
        }
    },

    async atualizar(req, res) {
        try {
            const professor = await ProfessorService.atualizar(req.params.id, req.body);
            res.status(200).json(professor);
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    },

    async deletar(req, res) {
        try {
            await ProfessorService.deletar(req.params.id);
            res.status(204).send();
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }
};
