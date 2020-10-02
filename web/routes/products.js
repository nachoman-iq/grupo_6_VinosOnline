var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('estamos en products router');
});
router.get('/algo', function(req, res, next) {
    res.send('estamos en products algo');
  });

module.exports = router;