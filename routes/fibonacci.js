var express = require('express');
var router = express.Router();

var fibo = require('../middlewares/fibonacci');

router.post('/', fibo.getFibo);

module.exports = router;