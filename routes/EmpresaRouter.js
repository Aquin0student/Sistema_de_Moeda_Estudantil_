const express = require('express');
const router = express.Router();
const {verificarAutenticacao} = require("../Middlewares/Autenticador");
const EmpresaController = require("../Controllers/EmpresaController")

router.post('/cadastrarVantagem', verificarAutenticacao, EmpresaController.cadastrarVantagem)

module.exports = router