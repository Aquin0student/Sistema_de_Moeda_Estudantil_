const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Aluno = require('../Models/Aluno')
const Professor = require("../Models/Professor")


class Transacao extends Model {}


Transacao.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  professorId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Professor',
      key: 'id'
    }
  },
  alunoId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Aluno',
      key: 'id'
    }
  },
  data: DataTypes.DATE,
  valor: DataTypes.INTEGER,
  motivo: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Transacao',
  tableName: 'Transacao',
  timestamps: false
});


module.exports = Transacao;
