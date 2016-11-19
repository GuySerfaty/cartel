let db = require('../db/maindb');
let Users = require('./Users');
let Deals = require('./Deals');
let Sequelize = require('sequelize');

Users.hasOne(Deals, {foreignKey:{name: 'user_id', unique: 'uniqueSelectedItem'}, as: 'Seller'});

db.sync();

module.exports = {
  Users,
  Deals
};
