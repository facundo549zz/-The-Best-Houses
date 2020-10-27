var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const upImageProducts = require('../middlewares/upImageProducts');
const upImageAvatar = require('../middlewares/upImageAvatar');
const logDBMiddleware = require('../middlewares/logDBMiddlewares');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
//const registerValidator = require('../validations/registerValidator');




router.get('/register', usersController.register);
router.post('/register',upImageAvatar.any(),usersController.processRegister);
router.get('/login', usersController.login);
router.post('/login',usersController.processLogin);
router.get('/profile', /*sessionUserCheck,*/ usersController.profile);
//router.post('/profile', upImageProducts, usersController.Cargar);
router.get('/login/logout',usersController.logout);





module.exports = router;

