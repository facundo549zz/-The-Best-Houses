var express = require('express');
var router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/', carritoController.carritoController)


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('productCart', { title: 'Express' });
});
*/
module.exports = router;