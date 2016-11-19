let Sequelize = require('sequelize');
let db = require('../db/maindb');

let Transactions = db.define('Transactions', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  seller_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  },
  buyer_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  },
  status: {
      type: Sequelize.STRING,
      allowNull: false,
  }
},{
  tableName: 'Transactions',
  freezeTableName: true
});

module.exports = Transactions;
