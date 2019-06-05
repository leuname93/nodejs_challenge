var router = require('express').Router();

router.use('/fib', require('./fibonacci'));

module.exports = router;