const usuarios = require('../data/usuarios');
const productos = require('../data/products.json');

const fs = require('fs');
const path = require('path');

module.exports = {
   login:function(req,res){
        res.render('login',{
            title: "Ingresa a tu cuanta",
            css: "login.css"
        })
    },
    processLogin:function(req,res){
        usuarios.forEach(usuario => {
            if(usuario.email == req.body.email){
                req.usuario = {
                    id:usuario.id,
                    name: usuario.nombre, 
                    apelliido: usuario.apellido,
                    email:usuario.email
                } 
            }else{
                res.render('login',{
                    title:"Ingresá a tu cuenta",
                    css: "login.css",
                    errors:errors.mapped(),
                    old:req.body,
                    usuario: req.usuario
                   })
            }
        });
     
    },
    profile: function(req,res){
        res.render('userProfile',{
            title: "Perfil de usuario",
            productos: productos.filter(producto=>{
                return producto.category != "tipos de Bicicletas"
            }),
            css:"profile.css",
        })
    },
}