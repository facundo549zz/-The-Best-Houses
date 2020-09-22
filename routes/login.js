var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');
const upImageProducts = require('../middlewares/upImageProducts');
//const sessionUserCheck = require('../middlewares/sessionUserCheck');


router.get('/', loginController.login);
router.post('/',loginController.processLogin);
router.get('/profile', /*sessionUserCheck,*/loginController.profile);
//router.post('/profile', upImageProducts, loginController.Cargar);
router.get('/logout',loginController.logout);


module.exports = router;