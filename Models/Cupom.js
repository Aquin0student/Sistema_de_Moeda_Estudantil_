const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Vantagem = require('../Models/Vantagem')
const Aluno = require('../Models/Aluno')


class Cupom extends Model {}

Cupom.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  alunoId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Aluno',
      key: 'id'
    }
  },
  vantagemId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Vantagem',
      key: 'id'
    }
  },
  codigo: DataTypes.STRING,
  status: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Cupom',
  tableName: 'Cupom',
  timestamps: false
});


module.exports = Cupom;
