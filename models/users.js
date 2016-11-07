let Sequelize = require('sequelize');
let db = require('../db/maindb')

let Users = db.define('Users', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  fb_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
  },
  first_name: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  last_name: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  fb_token: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  birthday: {
      type: Sequelize.DATE,
      allowNull: false,
  },
  gender: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  product_amount: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      defaultValue: 1000
  },
  money: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
      defaultValue: 1000
  },
  status: {
      type: Sequelize.STRING,
      allowNull: true,
  },
  lat: {
      type: Sequelize.STRING,
      allowNull: true,
  },
  lan: {
      type: Sequelize.STRING,
      allowNull: true,
  }
},{
  tableName: 'Users',
  freezeTableName: true,
  underscored: true
})

module.exports = Users;
