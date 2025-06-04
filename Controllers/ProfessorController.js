const Professor = require('../Models/Professor');

module.exports = {
  async consultarExtrato(req, res) {
    try {
      const usuarioId = req.session.usuarioId;

      if (!usuarioId) {
        return res.status(401).json({ error: 'Usuário não autenticado' });
      }

      const professor = await Professor.findByPk(usuarioId);

      if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado' });
      }

      return res.status(200).json({
        saldoMoedas: professor.saldoMoedas
      });

    } catch (error) {
      console.error('Erro ao buscar saldo do professor:', error);
      return res.status(400).json({ error: error.message });
    }
  }
};
