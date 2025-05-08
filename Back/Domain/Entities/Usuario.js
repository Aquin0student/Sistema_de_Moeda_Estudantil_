const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Usuario extends Model {
  static associate(models) {
    this.hasOne(models.Aluno, { foreignKey: 'id' });
    this.hasOne(models.Professor, { foreignKey: 'id' });
    this.hasOne(models.EmpresaParceira, { foreignKey: 'id' });
  }
}

Usuario.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
  tipo: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'Usuario',
  timestamps: false
});

module.exports = Usuario;
