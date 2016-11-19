let express = require('express');
let jwt = require('jsonwebtoken');
let router = express.Router();
var config = require('../config');

loginRequired = (req, res, next) => {
  token = req.headers['authentication'];
  if(token){
    jwt.verify(token, config.session_secret, (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else{
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
};
module.exports = {router: router, loginRequired: loginRequired};
