var express = require('express');
var router = express.Router();
let client_count=0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
