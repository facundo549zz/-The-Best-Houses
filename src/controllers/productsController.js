const path = require('path');
const fs = require('fs');
//const productos = require('../data/products.json');
const db = require('../database/models');
const Sequelize = require('sequelize');
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
                    association : 'categoria'
                },
            ]
        })
        .then(bicicleta =>{
             producto = bicicleta
            db.Product.findAll({
                where:{
                    id_categoria: bicicleta.categoria.id
                }
            })
        })

            .then(bicicletas =>{  
            res.render('productDetail', {
            title: "Detalle del Producto",
            producto: producto,
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
        let errores = validationResult(req)
        if(errores.isEmpty()){
            db.Product.Create({
                marca: req.body.marca,
                nombre: req.body.nombre,
                color: req.body.color,
                precio: Number(req.body.precio),
                descripcion: req.body.fichaTecnica,
                fotos: (req.files[0]) ?req.files[0].filename: "default.png",
               /* id_categoria:Number(req.body.categoria)*/
                })
            .then(result => {
                console.log(result)
                res.redirect('/products')
            })
            .catch(err => {
            res.send(err)
            })
        }else{
            res.render('productAdd', {
                title: "Agregar Producto",
                css:'productAdd.css',
                errores: errores.mapped(),
                old:req.body,
            }) 
            .catch(err => {
                res.send(err)
            })
        }
    },
}
