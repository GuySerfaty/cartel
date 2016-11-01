let Sequelize = require('sequelize');
let db = require('../db/maindb')

let Deals = db.define('Deals', {
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
  amount: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  },
  price: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  }
},{
  tableName: 'Deals',
  freezeTableName: true
})

module.exports = Deals;
