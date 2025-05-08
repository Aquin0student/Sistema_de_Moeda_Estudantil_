const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Professor extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'id' });
    this.belongsTo(models.Instituicao, { foreignKey: 'instituicaoId' });
    this.hasMany(models.Transacao, { foreignKey: 'professorId' });
  }
}

Professor.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true
  },
  matricula: DataTypes.STRING,
  instituicaoId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Instituicao',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Professor',
  tableName: 'Professor',
  timestamps: false
});

module.exports = Professor;
