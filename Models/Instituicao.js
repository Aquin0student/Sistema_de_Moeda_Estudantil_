const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Aluno = require('../Models/Aluno')
const Professor = require("../Models/Professor")

class Instituicao extends Model {}



Instituicao.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nome: DataTypes.STRING,
  endereco: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Instituicao',
  tableName: 'Instituicao',
  timestamps: false
});

Instituicao.hasMany(Professor, {foreignKey: 'instituicaoId'})


module.exports = Instituicao;
