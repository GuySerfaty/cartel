let router_config = require('./index');
let router = router_config.router;
let loginRequired = router_config.loginRequired;
let models = require('../models');
let dateHelper = require('../helpers/date_helper');
let graph = require('fbgraph');
let jwt = require('jsonwebtoken');
var config = require('../config');

createToken = (obj) => {
  return jwt.sign(obj, config.session_secret);
};

router.post('/login',(req, res) => {
  graph.setAccessToken(req.body.fb_token);
  graph.get('me', {fields: 'id, email, first_name, last_name, gender, birthday'}, function(err, loginParams) {
      console.log('facebook calback', res);
      loginParams.fb_id = loginParams.id;
      loginParams.fb_token = req.body.fb_token;
      loginParams.latitude = req.body.latitude;
      loginParams.longitude = req.body.longitude;
      delete(loginParams.id);

      models.Users.findOrCreate({where:{fb_id:loginParams.fb_id}, defaults:loginParams}).spread(function (user, created) {
          if (created) {
              res.json({userParams:user, sessionTokenUpdate:createToken({id:user.id}), firstLogin:true});
          } else {
              return user.updateAttributes(loginParams).then( (updated) => {
                  res.json({userParams:user, sessionTokenUpdate:createToken({id:user.id})});
              });
          }
      });

  });
});

router.post('/update',loginRequired ,(req, res) => {
  models.Users.update(req.body, {where:{id:req.decoded.id}}).then( (user) => {
    res.json({user:user});
  })
});

module.exports = router;
