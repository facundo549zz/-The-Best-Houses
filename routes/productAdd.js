var express = require('express');
var router = express.Router();
const addController = require('../controllers/addController');

router.get('/', addController.addController)

module.exports = router;