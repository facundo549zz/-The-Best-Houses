var express = require('express');
var router = express.Router();
const addController = require('../controllers/addController');

router.get('/', addController.addController)
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('productAdd', { title: 'Express' });
});
*/
module.exports = router;