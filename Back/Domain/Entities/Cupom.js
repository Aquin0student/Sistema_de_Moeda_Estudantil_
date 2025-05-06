const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');
const Vantagem = require('./Vantagem');

class Cupom extends Model {}

Cupom.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: DataTypes.STRING,
    dataValidade: DataTypes.DATE,
    status: DataTypes.STRING,
    vantagemId: {
        type: DataTypes.BIGINT,
        references: {
            model: Vantagem,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Cupom',
    tableName: 'Cupom',
    timestamps: false
});

module.exports = Cupom;
