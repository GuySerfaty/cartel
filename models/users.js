let Sequelize = require('sequelize');
let db = require('../db/maindb')

let Users = db.define('Reservation', {
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
  user_name: {
      type: Sequelize.STRING,
      allowNull: false,
  }
},{
  tableName: 'Users',
  freezeTableName: true
})

module.exports = Users;
