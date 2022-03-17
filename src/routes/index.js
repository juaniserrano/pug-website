var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index');
});

router.get('/eng', function (req, res, next) {
	res.render('index');
});

router.get('/esp', function (req, res, next) {
	res.render('indexesp', { title: 'Express' });
});

module.exports = router;
