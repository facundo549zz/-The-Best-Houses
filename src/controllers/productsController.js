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
            db.Product.create({
                marca: req.body.marca.trim(),
                nombre: req.body.nombre.trim(),
                precio: Number(req.body.precio),
                descripcion: req.body.fichaTecnica,
                fotos: (req.files[0]) ?req.files[0].filename: "default.png",
                id_categoria:Number(req.body.categoria)
                })
            .then(result => {
                console.log(result)
                res.redirect('/products')
            })
            .catch(err => {
            res.send(err)
            })
    },

    delete: function (req,res){
        db.product.destroy({
            where:{
                id:req.params.id
            },
        })
        .then(result => {
            console.log(result)
            res.redirect('/products')

        })
    },

    editar: function(req,res){
        db.Productos.findOne({ 
            where:{ id_producto:req. params.id } }) 
            .then(elemento => { res.render("EditarProducto",{ 
                producto: elemento, 
                title : "Modificar producto", 
                css: "style.css", usuario:req.session.usuario 
            }) 
        }) 
        .catch(error => { 
            res.send(error) 
        }) 
    },
    guardarEdicion: function(req,res){
        db.Producto.update({ 
            nombre: req.body.nombre, 
            precio: req.body.precio, 
            id_categoria: req.body.categoria, 
            descripcion: req.body.descripcion, 
            fotos: (req.files[0])?req.files[0].
            filename : productos.imagen, 
        },
        { where: { 
            id: req.params.id 
        } 
        })
            .then(resultado => { 
                res.redirect('/products') 
            }) 
    

    }}
