let express = require('express')
let jwt = require('express-jwt');
let router = express.Router();

router.use(function(req, res, next) {
  next()
});
loginRequirement = () => {
  console.log('login function run')
  return jwt({ secret: config.secret });
};
module.exports = {router: router, loginRequirement: loginRequirement};
