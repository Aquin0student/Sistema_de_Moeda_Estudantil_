const express = require('express');
const router = express.Router();
const UsuarioController = require('../Controllers/UsuarioController')
const {verificarAutenticacao} = require("../Middlewares/Autenticador");



router.post('/login', UsuarioController.login)

router.post('/alterar-senha', verificarAutenticacao, UsuarioController.alterarSenha);

router.post('/cadastro', UsuarioController.cadastro)

module.exports = router;
