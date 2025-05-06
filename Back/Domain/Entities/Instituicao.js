const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

class Instituicao extends Model {}

Instituicao.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Instituicao',
    tableName: 'Instituicao',
    timestamps: false
});

module.exports = Instituicao;
