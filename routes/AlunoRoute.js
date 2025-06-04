const express = require('express');
const router = express.Router();
const AlunoController = require('../Controllers/AlunoController')
const {verificarAutenticacao} = require("../Middlewares/Autenticador");

router.get("/consultarExtrato", verificarAutenticacao, AlunoController.consultarExtrato)

module.exports = router;
