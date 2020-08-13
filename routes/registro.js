const express = require('express');
const router = express.Router();

const controller = require('../controllers/registroController') //requiero el controlador

router.get('/', controller.listar) //utilizo el metodo listar del controlador
router.get('/registro', controller.registro)
module.exports = router //exporto todas las rutas
