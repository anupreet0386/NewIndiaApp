var express = require('express');
var router = express.Router();

/* GET category listing. */
router.get('/', function(req, res, next) {
  var categoryArray = [
  {
    "categoryId": "c1",
    "categoryName": "Fresh produce"
  },
  {
    "categoryId": "c2",
    "categoryName": "Snacks/Frozen"
  },
  {
    "categoryId": "c3",
    "categoryName": "Kitchen utilities"
  },
  {
    "categoryId": "c4",
    "categoryName": "fashion"
  }
];
  res.status(200).send(categoryArray);
});

module.exports = router;
