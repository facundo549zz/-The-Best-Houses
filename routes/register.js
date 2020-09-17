var express = require('express');
var router = express.Router();
const registroController = require('../controllers/registroController');
const logDBMiddleware = require('../middlewares/logDBMiddlewares');

router.get('/', registroController.registrate);

router.post('/', logDBMiddleware ,registroController.processRegister);

module.exports = router;
