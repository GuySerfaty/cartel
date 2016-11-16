let express = require('express')
let router = express.Router();

router.use(function(req, res, next) {
  console.log('fmitaaaa 111')
  next()
});
module.exports = router;
