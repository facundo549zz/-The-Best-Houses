var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.listado);
router.get('/cart', productsController.carritoController)
router.get('/add', productsController.addController);
router.get('/:id', productsController.detailProducto);



;



module.exports = router;
