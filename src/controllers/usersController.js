//const usuarios = require('../data/usuarios');
const productos = require('../data/products');
const db = require('../database/models');
const {validationResult} = require('express-validator');

const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
     register:function(req,res){
        res.render('register',{
            title: "Registrate aqui",
            css: "register.css"
        })
    },
    processRegister:function(req,res){

        db.User.create({
            nombre : req.body.nombre.trim(),
            apellido : req.body.apellido.trim(),
            email: req.body.email.trim(),
            password: bcrypt.hashSync(req.body.password.trim(),10),
            imagen: (req.files[0])?req.files[0].filename:"default.png",
        })
        .then(result => {
            console.log(result)
            return res.redirect('/users/login')
        })
        .catch(errores =>{
            console.log(errores) 
            return res.redirect('/users/register')
        })
       
     },
    
     login: function (req, res) {
        res.render('login', {
            title: "Ingresa a tu cuenta",
            css: "login.css",
            usuario: req.session.user
        })
    },
    processLogin: function (req, res) {
   
        db.Users.findOne({
            where: {
                email:req.body.email
            }
        })
        .then(user => {
            req.session.user = {
                id: user.id,
                nick: user.nombre + "" + user.apellido,
                email: user.email,
                imagen: user.imagen
            }
            res.locals.user = req.session.user;
            return res.redirect('/users/profile')
        })
          /*  usuarios.forEach(usuario => {
            if (usuario.email == req.body.email) {
                req.session.usuario = {
                    id: usuario.id,
                    nick: usuario.nombre + " " + usuario.apellido,
                    email: usuario.email,
                    image: usuario.image
                }
           if (req.body.recordar) {
                    res.cookie('userTheBestBikes', req.session.usuario, {
                        maxAge: 1000 * 60 * 2
                    })
                }
                res.redirect('/profile')
            } else {
                res.render('login', {
                    title: "Ingresá a tu cuenta",
                    css: "login.css",
                    old: req.body,
                    usuario: req.session.usuario
                })
            }
        });*/

    },
    profile: function (req, res) {
        res.render('userProfile', {
            title: "Perfil de usuario",
           /* productos: productos.filter(producto => {
                return producto.category != "todosLosProductos" && producto.category != "montaña" && producto.category != "infantil" && producto.category != "ruta" && producto.category != "BMX" && producto.category != "urbana"
            }),*/
            css: "profile.css",
            usuario: req.session.user
        })
    },
    logout: function (req, res) {
        req.session.destroy();
        if (req.cookies.userTheBestBikes) {
            res.cookie('userTheBestBikes', '', {
                maxAge: -1
            })
        }
        return res.redirect('/')
    },
    delete: function (req,res) {
        
    }
    
}
