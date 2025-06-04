const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Transacao = require('../Models/Transacao')


class Professor extends Model {}

Professor.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  nome: DataTypes.STRING,
  departamento: DataTypes.STRING,
  saldoMoedas: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Professor',
  tableName: 'Professor',
  timestamps: false
});


module.exports = Professor;
