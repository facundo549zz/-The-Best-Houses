const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController') //requiero el controlador

router.get('/',controller.mostrar) //utilizo el metodo listar del controlador

module.exports = router; //exporto todas las rutas
