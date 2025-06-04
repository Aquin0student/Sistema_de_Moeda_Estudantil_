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
  titulo: DataTypes.STRING,
  descricao: DataTypes.STRING,
  empresaParceiraId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'EmpresaParceira',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Vantagem',
  tableName: 'Vantagem',
  timestamps: false
});


Vantagem.belongsTo(EmpresaParceira, { foreignKey: 'empresaParceiraId' })

module.exports = Vantagem;
