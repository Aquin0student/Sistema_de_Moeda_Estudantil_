const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Instituicao extends Model {
  static associate(models) {
    this.hasMany(models.Professor, { foreignKey: 'instituicaoId' });
    this.hasMany(models.Aluno, { foreignKey: 'instituicaoId' });
  }
}

Instituicao.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nome: DataTypes.STRING,
  endereco: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Instituicao',
  tableName: 'Instituicao',
  timestamps: false
});

module.exports = Instituicao;
