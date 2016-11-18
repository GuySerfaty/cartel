let router_config = require('./index');
let router = router_config.router;
let models = require('../models');
let dateHelper = require('../helpers/date_helper');
let graph = require('fbgraph');
let jwt = require('jsonwebtoken');
var config = require('../config');

createToken = (obj) => {
  return jwt.sign(obj, config.session_secret, { expiresIn: 60*60*60*1000 });
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
      models.Users.upsert(loginParams).then( (data) => {
          res.json({addedUserID:data, sessionTokenUpdate:createToken({id:data.id})});
      });
  });
});

module.exports = router;
