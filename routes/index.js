var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is API service application built in ExpressJS 4+' });
});

module.exports = router;
