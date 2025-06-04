const express = require('express');
const router = express.Router();
const {verificarAutenticacao} = require("../Middlewares/Autenticador");
const ProfessorController = require('../Controllers/ProfessorController')

router.get('/consultarExtrato', verificarAutenticacao, ProfessorController.consultarExtrato)

module.exports = router
