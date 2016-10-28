let db = require('../db/maindb')
let Users = require('./Users')

//Users.belongsToMany(Users, {through: 'Usersss'});

db.sync()

module.exports = {
  Users
}
