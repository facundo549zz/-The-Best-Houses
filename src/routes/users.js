var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const upImageProducts = require('../middlewares/upImageProducts');
const upImageAvatar = require('../middlewares/upImageAvatar');
const logDBMiddleware = require('../middlewares/logDBMiddlewares');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator')
//const cookieCheck = require('../middlewares/cookieCheck');

router.get('/register', usersController.register);
router.post('/register',upImageAvatar.any(),registerValidator,usersController.processRegister);
router.get('/login', usersController.login);
router.post('/login', loginValidator, usersController.processLogin);
router.get('/profile',sessionUserCheck,usersController.profile);
router.post('/profile',upImageAvatar.any(),usersController.profile);
router.get('/logout',usersController.logout);
router.delete('/delete/:id',usersController.delete);

module.exports = router;

