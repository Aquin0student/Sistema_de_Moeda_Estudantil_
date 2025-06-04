const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Aluno = require('../Models/Aluno');
const Professor = require('../Models/Professor');
const EmpresaParceira = require('../Models/EmpresaParceira');


class Usuario extends Model {}



Usuario.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  cpf: DataTypes.STRING,
  senha: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'Usuario',
  timestamps: false
});

Usuario.hasOne(Aluno, { foreignKey: 'id' })
Usuario.hasOne(Professor, { foreignKey: 'id' })
Usuario.hasOne(EmpresaParceira, { foreignKey: 'id' })


module.exports = Usuario;


