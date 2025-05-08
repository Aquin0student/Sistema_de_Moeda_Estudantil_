const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Cupom extends Model {
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'alunoId' });
    this.belongsTo(models.Vantagem, { foreignKey: 'vantagemId' });
  }
}

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
  usado: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Cupom',
  tableName: 'Cupom',
  timestamps: false
});

module.exports = Cupom;
