const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Instituicao = require('../Models/Instituicao')
const Transacao = require('../Models/Transacao')
const Vantagem = require('../Models/Vantagem')
const Cupom = require('../Models/Cupom')

class Aluno extends Model {}


Aluno.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  rg: {
    type: DataTypes.STRING
  },
  endereco: {
    type: DataTypes.STRING
  },
  saldoMoedas: {
    type: DataTypes.DOUBLE
  },
  curso: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Aluno',
  tableName: 'Aluno',
  timestamps: false
});


Aluno.hasMany(Transacao, { foreignKey: 'alunoId' })

Aluno.belongsToMany(Vantagem, {
  through: Cupom,
  foreignKey: "alunoId",
  otherKey: 'vantagemId'
})


module.exports = Aluno;
