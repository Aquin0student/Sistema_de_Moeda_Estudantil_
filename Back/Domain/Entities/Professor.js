const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');
const Usuario = require('./Usuario');

class Professor extends Model {}

Professor.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    departamento: DataTypes.STRING,
    saldoMoedas: DataTypes.DOUBLE
}, {
    sequelize,
    modelName: 'Professor',
    tableName: 'Professor',
    timestamps: false
});

module.exports = Professor;
