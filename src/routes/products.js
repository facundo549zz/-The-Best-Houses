var express = require('express');
var router = express.Router();
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const productsController = require('../controllers/productsController');
const upImageProducts = require('../middlewares/upImageProducts');

router.get('/', productsController.listado);
router.get('/cart', productsController.carritoController);
router.get('/add',productsController.addController);
router.post('/add',upImageProducts.any(),productsController.upload);
router.get('/detalle/:id', productsController.detailProducto);
router.post('/search', productsController.search);
router.post('/delete', productsController.delete);
router.get('/editar/:id',productsController.editar)

router.put('/editar/:id', productsController.guardarEdicion);

module.exports = router;
