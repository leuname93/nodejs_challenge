var router = require('express').Router();

router.use('/fib', require('./fibonacci'));
router.use('/index', require('./indexOf'));

module.exports = router;