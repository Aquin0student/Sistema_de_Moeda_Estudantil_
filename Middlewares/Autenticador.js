

function verificarAutenticacao(req, res, next) {
  if (req.session.usuarioId) {
    next();
  } else {
    res.status(401).json({ error: 'Usuário não autenticado.' });
  }
}

module.exports = {verificarAutenticacao}
