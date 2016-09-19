var express = require('express');
var router = express.Router();

/* GET supplier listing. */
router.get('/', function(req, res, next) {
  var supplierArray = [
  {
    "supplierId": "SP1",
    "companyName": "efg",
    "address": "california",
    "phone":"0000000000",
    "email":"efg@gmail.com",
    "customerId": "cs101"
  },
  {
    "supplierId": "SP2",
    "companyName": "ijk",
    "address": "california",
    "phone":"0000000000",
    "email":"ijk@gmail.com",
    "customerId": "cs101"
  },
  {
    "supplierId": "SP3",
    "companyName": "lmp",
    "address": "california",
    "phone":"0000000000",
    "email":"lmp@gmail.com",
    "customerId": "cs101"
  },
  {
    "supplierId": "SP4",
    "companyName": "qrt",
    "address": "california",
    "phone":"0000000000",
    "email":"qrt@gmail.com",
    "customerId": "cs101"
  }
];
  res.status(200).send(supplierArray);
});

module.exports = router;
