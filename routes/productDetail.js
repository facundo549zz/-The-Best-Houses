const express = require('express');
const router = express.Router();

const controller = ('../controller/detailController/')

router.get('/', controller.listar)

module.exports= router;