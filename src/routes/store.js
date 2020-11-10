var express = require('express');
var router = express.Router();

const registerValidator = require('../validations/registerValidator');
const upImageProducts = require('../middlewares/upImageProducts');
const storeController = require('../controllers/storeController');


router.get('/register',storeController.register);
router.post('/register',upImageProducts.any(),/*registerValidator*hacer una validacion propia*/storeController.processRegister);

module.exports = router;