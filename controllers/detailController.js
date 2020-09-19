const path = require('path');
const fs = require('fs');
const productos = require('../data/products.json');

module.exports = {
    listado: function(req,res){
        res.render('products',{
            css:'products.css',
            listadoDeProductos : productos
        })
    },
    detailProducto:(req ,res)=>{
        let id = req.params.id;
        let producto = productos.filter(producto => {
            return producto.id == id
        })
        res.render('productDetail', {
            title: "Detalle del Producto",
            id: id,
            producto: producto[0],
            css:"productDetail.css",

        })
    },
}
