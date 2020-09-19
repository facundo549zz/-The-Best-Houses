var express = require('express');
var router = express.Router();
const loginContoller = require('../controllers/loginController');

router.get('/', loginContoller.login)

module.exports = router;