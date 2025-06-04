const { Sequelize } = require('sequelize');
require('dotenv').config();  // Para carregar as variáveis do .env

// Criação da instância do Sequelize com as variáveis de ambiente
const sequelize = new Sequelize({
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',  // O banco de dados que você está usando (pode ser mysql, postgres, etc.)
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    logging: false  // Desabilita o log SQL, se necessário
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao banco de dados!');
    })
    .catch(err => {
        console.error('Erro ao conectar no banco de dados:', err);
    });

module.exports = sequelize;
