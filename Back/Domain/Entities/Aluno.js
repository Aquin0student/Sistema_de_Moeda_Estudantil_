const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Aluno extends Model {
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'id' });
    this.belongsTo(models.Instituicao, { foreignKey: 'instituicaoId' });
    this.hasMany(models.Transacao, { foreignKey: 'alunoId' });
    this.belongsToMany(models.Vantagem, {
      through: models.Cupom,
      foreignKey: 'alunoId',
      otherKey: 'vantagemId'
    });
  }
}

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

module.exports = Aluno;
