const express = require('express');
const router = express.Router();
const {verificarAutenticacao} = require("../Middlewares/Autenticador");
const CupomController = require('../Controllers/CupomController')

router.post('/criarCupom', verificarAutenticacao, CupomController.criarCupom)

module.exports = router
