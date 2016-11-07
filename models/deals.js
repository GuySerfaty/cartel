let Sequelize = require('sequelize');
let db = require('../db/maindb')

let Deals = db.define('Deals', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  },
  state: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'active'
  },
  price: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  }
},{
  tableName: 'Deals',
  freezeTableName: true,
  underscored: true
})

module.exports = Deals;
