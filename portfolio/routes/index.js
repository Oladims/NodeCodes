var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ibro.dev' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'ibro.dev' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ibro.dev' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ibro.dev' });
});
module.exports = router;
