var express = require('express');
var router = express.Router();
const controller = require('../controllers/registroController');


router.get('/', controller.registrate)
router.post('/',controller.processRegister);
/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
*/
module.exports = router;
