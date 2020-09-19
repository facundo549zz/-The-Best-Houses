var express = require('express');
var router = express.Router();
const carritoController = require('../controllers/carritoController');

router.get('/', carritoController.carritoController)


module.exports = router;