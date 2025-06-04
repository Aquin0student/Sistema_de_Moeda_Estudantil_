// Models/AlunoInstituicao.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class AlunoInstituicao extends Model {}

AlunoInstituicao.init({
  alunoId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  },
  instituicaoId: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
  }
}, {
  sequelize,
  modelName: 'AlunoInstituicao',
  tableName: 'AlunoInstituicao',
  timestamps: false
});

module.exports = AlunoInstituicao;
