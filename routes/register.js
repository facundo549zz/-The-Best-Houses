var express = require('express');
var router = express.Router();
const registroController = require('../controllers/registroController');

router.get('/', registroController.registroController)
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
*/
module.exports = router;
