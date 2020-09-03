const fs = require('fs')
const path = require('path')


module.exports = {
    registroController:function(req,res){
        res.render('register',{
            title: "Detalle del Producto",
            css: "register.css"
        })
    },
}
