var express = require('express');
var router = express.Router();
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const productsController = require('../controllers/productsController');


router.get('/', productsController.listado);
router.get('/cart', productsController.carritoController);
router.get('/add',productsController.addController);
router.post('/add',productsController.upload);
router.get('/detalle/:id', productsController.detailProducto);

router.post('/search', productsController.search);

module.exports = router;
