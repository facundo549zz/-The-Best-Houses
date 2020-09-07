const path = require('path')

module.exports = {
    error:function(req,res){
        res.render('error',{
            title: "Detalle del Producto",
            css: "error.css"
        })
    },
}