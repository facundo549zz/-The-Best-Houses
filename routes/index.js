var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const cookieCheck = require('../middlewares/cookieCheck');

router.get('/', cookieCheck,indexController.index);


module.exports = router;
