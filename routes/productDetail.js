var express = require('express');
var router = express.Router();
const detailController = require('../controllers/detailController');


router.get('/', detailController.detailProducto)


module.exports = router;
