var express = require('express');
var router = express.Router();
const detailController = require('../controllers/detailController');

/* GET home page. */
router.get('/', detailController.detailProducto)
/*router.get('/', function(req, res, next) {
  res.render('productDetail', { title: 'Express' });
});*/

module.exports = router;
