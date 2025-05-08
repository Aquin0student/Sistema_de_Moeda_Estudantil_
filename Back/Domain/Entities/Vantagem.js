const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Vantagem extends Model {
  static associate(models) {
    this.belongsTo(models.EmpresaParceira, { foreignKey: 'empresaParceiraId' });
    this.belongsToMany(models.Aluno, {
      through: models.Cupom,
      foreignKey: 'vantagemId',
      otherKey: 'alunoId'
    });
  }
}

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

module.exports = Vantagem;
