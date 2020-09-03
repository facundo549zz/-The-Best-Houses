const path = require('path')

module.exports = {
    addController:function(req,res){
        res.render('productAdd',{
            title: "Detalle del Producto",
            css: "productAdd.css"
        })
    },
}