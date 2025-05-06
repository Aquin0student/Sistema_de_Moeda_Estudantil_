const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');
const Usuario = require('./Usuario');

class EmpresaParceira extends Model {}

EmpresaParceira.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING
}, {
    sequelize,
    modelName: 'EmpresaParceira',
    tableName: 'EmpresaParceira',
    timestamps: false
});

module.exports = EmpresaParceira;
