const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const Aluno = require('../Models/Aluno')
const EmpresaParceira = require('../Models/EmpresaParceira')
const Cupom = require('../Models/Cupom')

class Vantagem extends Model {}


Vantagem.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: DataTypes.STRING,
  empresaParceiraId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'EmpresaParceira',
      key: 'id'
    }
  },
  custoMoedas: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Vantagem',
  tableName: 'Vantagem',
  timestamps: false
});



module.exports = Vantagem;
