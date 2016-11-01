let db = require('../db/maindb')
let Users = require('./Users')
let Deals = require('./Deals')

Deals.belongsTo(Users);

db.sync()

module.exports = {
  Users
}
