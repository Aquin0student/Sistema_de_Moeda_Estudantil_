const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('../Models/Usuario')
const Vantagem = require('../Models/Vantagem')

class EmpresaParceira extends Model {}

EmpresaParceira.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  cnpj: DataTypes.STRING
}, {
  sequelize,
  modelName: 'EmpresaParceira',
  tableName: 'EmpresaParceira',
  timestamps: false
});



module.exports = EmpresaParceira;
