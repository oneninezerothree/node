var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/abc', function(req, res, next) {
  res.send('user abc');
});

module.exports = router;
