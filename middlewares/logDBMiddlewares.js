const fs = require('fs');

function LogDBMiddlewares(req, res, next) {
    fs.appendFileSync('logDB.txt', 'Se creó un registro al ingresar en la página ' + req.url + '\n');

    next();
}

module.exports = LogDBMiddlewares;