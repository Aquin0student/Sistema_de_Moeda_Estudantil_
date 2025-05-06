const { Model, DataTypes } = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');
const EmpresaParceira = require('./EmpresaParceira');

class Vantagem extends Model {}

Vantagem.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: DataTypes.STRING,
    custoMoedas: DataTypes.DOUBLE,
    foto: DataTypes.BLOB,
    empresaId: {
        type: DataTypes.BIGINT,
        references: {
            model: EmpresaParceira,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Vantagem',
    tableName: 'Vantagem',
    timestamps: false
});

module.exports = Vantagem;
