const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('/Back/Infraestructure/DB/.sql');

const db = {};

// Lê todos os arquivos .js na pasta atual (exceto index.js)
fs.readdirSync(__dirname)
  .filter(file =>
    file !== 'index.js' &&
    file.endsWith('.js')
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

// Associações
Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
