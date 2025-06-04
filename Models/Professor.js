const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('../Models/Usuario')
const Instituicao = require('../Models/Instituicao')
const Transacao = require('../Models/Transacao')


class Professor extends Model {}

Professor.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  matricula: DataTypes.STRING,
  instituicaoId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Instituicao',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Professor',
  tableName: 'Professor',
  timestamps: false
});



Professor.hasMany(Transacao, { foreignKey: 'professorId' })

module.exports = Professor;
