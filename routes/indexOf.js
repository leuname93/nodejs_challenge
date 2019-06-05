var express = require('express');
var router = express.Router();

var index = require('../middlewares/indexOf');

router.post('/', index.getIndex);

module.exports = router;