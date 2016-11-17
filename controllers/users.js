let router = require('./index');
let models = require('../models');
let dateHelper = require('../helpers/date_helper');

router.post('/create',(req, res) => {
  console.log("req::",req.body)
  models.Users.upsert(req.body).then( (data) => {
    res.json({addedUserID:data})
  })
})

module.exports = router;
