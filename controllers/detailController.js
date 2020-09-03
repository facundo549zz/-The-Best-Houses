const path = require('path')

module.exports = {
    detailProducto:function(req,res){
        res.render('productDetail',{
            title: "Detalle del Producto",
            css: "productDetail.css"
        })
    },

    /*detalleProducto:(req ,res)=>{
        let id = req.params.id
        let productoElegido;
        productos.forEach(producto =>{
            if(producto.id == id){
                productoElegido = producto
            }
        })
        res.render('detalleProducto',{
            titulo: productoElegido.nombre,
            producto : productoElegido,
        })
    },*/
}
