const path = require('path')

module.exports = {
    carritoController:function(req,res){
        res.render('productCart',{
            title: "Detalle del Producto",
            css: "productCart.css"
        })
    },
}