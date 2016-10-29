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
  frist_name: {
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
  }
},{
  tableName: 'Users',
  freezeTableName: true
})

module.exports = Users;
