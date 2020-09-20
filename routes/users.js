var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController');


router.get('/login',controller.login);
router.post('/login',controller.processLogin);



module.exports = router;
