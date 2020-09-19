var express = require('express');
var router = express.Router();
const controller = require('../controllers/registroController');


router.get('/', controller.registrate)
router.post('/',controller.processRegister);

module.exports = router;
