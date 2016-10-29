let express = require('express')
let router = express.Router();
let models = require('../models')
let dateHelper = require('../helpers/date_helper')
router.get('/',function(req, res) {
  models.Users.findAll().then(function (reservations) {
      res.json(reservations)
  });
})

router.post('/create',(req, res) => {
  res.json({addedUserID:models.Users.create(req.query)})
})

module.exports = router;
