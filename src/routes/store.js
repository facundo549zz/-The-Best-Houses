var express = require('express');
var router = express.Router();

const registerValidator = require('../validations/registerValidator');
const upImageAvatar = require('../middlewares/upImageAvatar');
const storeController = require('../controllers/storeController');


router.get('/register',storeController.register);
router.post('/register',upImageAvatar.any(),registerValidator,storeController.processRegister);

module.exports = router;