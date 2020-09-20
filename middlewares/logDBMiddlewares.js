const fs = require('fs');

function LogDBMiddlewares(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    fs.appendFileSync('logDB.txt', 'Se creó un registro al ingresar en la página ' + fullUrl + '\n');

    next();
}

module.exports = LogDBMiddlewares;