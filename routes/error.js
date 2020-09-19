var express = require('express');
var router = express.Router();
const errorController = require('../controllers/errorController');

router.get('/', errorController.error)

module.exports = router;