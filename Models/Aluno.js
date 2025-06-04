const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Usuario = require('../Models/Usuario')
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
  curso: DataTypes.STRING,
  instituicaoId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Instituicao',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Aluno',
  tableName: 'Aluno',
  timestamps: false
});


Aluno.belongsTo(Instituicao, {foreignKey: 'instituicaoId'})
Aluno.belongsTo(Transacao, {foreignKey: 'alunoId'})
Aluno.belongsToMany(Vantagem, {
  through: Cupom,
  foreignKey: "alunoId",
  otherKey: 'vantagemId'
})


module.exports = Aluno;
