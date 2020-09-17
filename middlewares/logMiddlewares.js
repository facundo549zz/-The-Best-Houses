const fs = require('fs');

function LogMiddlewares(req, res, next) {
    fs.appendFileSync('log.txt', 'Se ingreso en la página ' + req.url + '\n');

    next();
}

module.exports = LogMiddlewares;