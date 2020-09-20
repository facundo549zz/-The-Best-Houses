var express = require('express');
var router = express.Router();
const registroController = require('../controllers/registroController');
const logDBMiddleware = require('../middlewares/logDBMiddlewares');
const upImageAvatar = require('../middlewares/upImageAvatar');

router.get('/', registroController.registrate);

router.post('/',upImageAvatar.any(), logDBMiddleware ,registroController.processRegister);

module.exports = router;
