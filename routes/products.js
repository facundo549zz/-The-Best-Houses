var express = require('express');
var router = express.Router();
const controller = require('../controllers/detailController');


router.get('/',controller.listado);


module.exports = router;
