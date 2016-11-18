let router = require('./index');
let models = require('../models');
let dateHelper = require('../helpers/date_helper');
var graph = require('fbgraph');

router.post('/login',(req, res) => {
  graph.setAccessToken(req.body.fb_token);
  graph.get('me', {fields: 'id, email, first_name, last_name, gender, birthday'}, function(err, fb_res) {
    console.log('facebook calback', res)
    fb_res.fb_id = fb_res.id;
    fb_res.fb_token = req.body.fb_token;
    delete(fb_res.id);
    models.Users.upsert(fb_res).then( (data) => {
      res.json({addedUserID:data})
    })
  });

})

module.exports = router;
