const path = require('path');
const fs = require('fs');
//const productos = require('../data/products.json');
const db = require('../database/models');
const Sequelize = require('sequelize');
const { sequelize } = require('../database/models');
const op = Sequelize.Op
module.exports = {
    listado: function(req,res){
        db.Product.findAll()
        .then(productos => {
            res.render('products',{
                title : "Listado de Productos",
                productos : productos,
                css: "products.css"
            })
        })
        .catch(error =>{
            res.send(error)
        })
    },
    detailProducto:(req ,res)=>{
        let id = req.params.id;
       db.Product.findByPk(id,{ 
            include : [
                {
                    asociation : 'categoria'
                },
            ]
        })
        .then(bicicleta =>{
            db.product.findAll({
                where:{
                    id_categoria: bicicleta.categoria.id                }
            })
        })
        .then(bicicletas =>{  
        res.render('productDetail', {
            title: "Detalle del Producto",
            producto: bicicleta.categoria,
            bicicletas: bicicletas,
            css:"productDetail.css",
        })
        })
    },
    
    addController:function(req,res){
        db.Categorie.findAll()
        .then(categorias=>{
            res.render('productAdd',{
                title: "Agregar Producto",
                categorias: categorias,
                css: "productAdd.css"
            })
        })
        
    },
    carritoController:function(req,res){
        res.render('productCart',{
            title: "Detalle del Producto",
            css: "productCart.css"
        })
    },
    search: function(req, res) {
  
        db.Product.findAll({
            where : {
                nombre : {
                    [op.substring] : req.body.search
                }
            }

        })
        .then(bicicletas => {
         res.render('products', {
             title: "Resultado de la búsqueda",
             productos: bicicletas,
             css:'products.css'
         })
        })
        .catch(error => {
            res.send(error)
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
