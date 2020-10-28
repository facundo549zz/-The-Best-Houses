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
    addController:function(req,res){
        res.render('productAdd',{
            title: "Detalle del Producto",
            css: "productAdd.css"
        })
    },
    carritoController:function(req,res){
        res.render('productCart',{
            title: "Detalle del Producto",
            css: "productCart.css"
        })
    },

    upload: function (req, res) {
        let lastID = productos.length;

        let nuevoProducto = {
            id: lastID + 1,
            category: req.body.category,
            marca: req.body.marcas,
            name: req.body.name,
            colors: req.body.colores,
            price: req.body.price,
            description: req.body.description,
            image: req.files[0].filename,
        };
        productos.push(nuevoProducto);
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(productos), 'utf-8');
    },
}
