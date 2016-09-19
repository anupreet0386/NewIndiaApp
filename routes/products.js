var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
  var productArray = [
  {
    "productId":"101",
    "vendorProductId":"v101",
    "name":"Product1",
    "description":"Description for product 1"
  },
  {
    "productId":"102",
    "vendorProductId":"v102",
    "name":"Product2",
    "description":"Description for product 2"
  },
  {
    "productId":"103",
    "vendorProductId":"v103",
    "name":"Product3",
    "description":"Description for product 3"
  },
  {
    "productId":"104",
    "vendorProductId":"v104",
    "name":"Product4",
    "description":"Description for product 4"
  }
  ];
  res.status(200).send(productArray);
});

module.exports = router;
