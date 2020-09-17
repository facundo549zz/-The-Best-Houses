var express = require('express');
var router = express.Router();
const controller = require('../controllers/detailController');


router.get('/', controller.listado);
router.get('/:id', controller.detalleProducto);

module.exports = router;
