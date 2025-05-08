const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class EmpresaParceira extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'id' });
    this.hasMany(models.Vantagem, { foreignKey: 'empresaParceiraId' });
  }
}

EmpresaParceira.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  cnpj: DataTypes.STRING
}, {
  sequelize,
  modelName: 'EmpresaParceira',
  tableName: 'EmpresaParceira',
  timestamps: false
});

module.exports = EmpresaParceira;
