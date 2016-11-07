let express = require('express')
let router = express.Router();
let models = require('../models')
let dateHelper = require('../helpers/date_helper')

router.get('/', (req, res) => {
  models.Deals.findAll({
    where: {
      state: 'active'
    }
  }).then( (deals) => {
    res.json(deals);
  });
});

router.post('/create',(req, res) => {
  models.Deals.create({
      amount: req.body.amount,
      price: req.body.price,
      user_id: req.body.seller_id
    }).then( (data) => {
      res.json({ data:data });
    }).catch( (inst) => {
      console.log("error :: ",inst.message);
      res.json({ error:inst.message });
    });
});

router.get('/seller/:seller_id', (req, res) => {
  models.Users.findById(req.params.seller_id).then((user) => {
    user.getSeller().then( (deal) => {
      res.json(deal);
    });
  });
});


module.exports = router;
