const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');
const Usuario = require('./Usuario');

class Aluno extends Model {}

Aluno.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    rg: DataTypes.STRING,
    endereco: DataTypes.STRING,
    saldoMoedas: DataTypes.DOUBLE
}, {
    sequelize,
    modelName: 'Aluno',
    tableName: 'Aluno',
    timestamps: false
});

module.exports = Aluno;
