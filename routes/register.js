var express = require('express');
const registroController = require('../controllers/registroController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

module.exports = router;
