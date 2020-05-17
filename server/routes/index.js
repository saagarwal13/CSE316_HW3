var express = require('express');
var passport = require('passport');
var facebookStrategy = require('passport-facebook')


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
