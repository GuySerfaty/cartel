let Sequelize = require('sequelize');
let mainDB = new Sequelize('cartel', 'root', '',{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = mainDB;
