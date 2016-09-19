var express = require('express');
var router = express.Router();

/* GET supplier listing. */
router.get('/', function(req, res, next) {
  var supplierArray = [
  {
    "supplierId": "SP1",
    "companyName": "abc",
    "address": "california",
    "phone":"0000000000",
    "email":"abc@gmail.com",
    "customerId": "cs101"
  },
  {
    "supplierId": "SP1",
    "companyName": "abc",
    "address": "california",
    "phone":"0000000000",
    "email":"abc@gmail.com",
    "customerId": "cs101"
  },
  {
    "supplierId": "SP1",
    "companyName": "abc",
    "address": "california",
    "phone":"0000000000",
    "email":"abc@gmail.com",
    "customerId": "cs101"
  },
  {
    "supplierId": "SP1",
    "companyName": "abc",
    "address": "california",
    "phone":"0000000000",
    "email":"abc@gmail.com",
    "customerId": "cs101"
  }
];
  res.status(200).send(supplierArray);
});

module.exports = router;
