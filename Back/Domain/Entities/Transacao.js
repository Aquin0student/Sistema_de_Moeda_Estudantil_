const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Transacao extends Model {
  static associate(models) {
    this.belongsTo(models.Professor, { foreignKey: 'professorId' });
    this.belongsTo(models.Aluno, { foreignKey: 'alunoId' });
  }
}

Transacao.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  professorId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Professor',
      key: 'id'
    }
  },
  alunoId: {
    type: DataTypes.BIGINT,
    references: {
      model: 'Aluno',
      key: 'id'
    }
  },
  dataTransacao: DataTypes.DATE,
  valor: DataTypes.DECIMAL
}, {
  sequelize,
  modelName: 'Transacao',
  tableName: 'Transacao',
  timestamps: false
});

module.exports = Transacao;
