const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');
const Aluno = require('./Aluno');
const Professor = require('./Professor');

class Transacao extends Model {}

Transacao.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    data: DataTypes.DATE,
    valor: DataTypes.DOUBLE,
    motivo: DataTypes.STRING,
    status: DataTypes.STRING,
    alunoId: {
        type: DataTypes.BIGINT,
        references: {
            model: Aluno,
            key: 'id'
        }
    },
    professorId: {
        type: DataTypes.BIGINT,
        references: {
            model: Professor,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Transacao',
    tableName: 'Transacao',
    timestamps: false
});

module.exports = Transacao;
