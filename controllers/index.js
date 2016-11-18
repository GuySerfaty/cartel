let express = require('express')
let router = express.Router();

router.use(function(req, res, next) {
  next()
});
module.exports = router;
