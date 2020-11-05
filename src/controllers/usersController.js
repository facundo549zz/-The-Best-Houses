//const usuarios = require('../data/usuarios');
//const productos = require('../data/products');
const db = require('../database/models');
const {
    validationResult
} = require('express-validator');

const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
    register: function (req, res) {
        res.render('register', {
            title: "Registrate aqui",
            css: "register.css"
        })
    },
    processRegister: function (req, res) {
        let errors = validationResult(req)
        errors
        db.User.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                password: bcrypt.hashSync(req.body.password.trim(), 10),
                //fecha_de_nacimiento: req.body.fecha_de_nacimiento.trim(),
                imagen: (req.files[0]) ? req.files[0].filename : "default.png",
                rol: 'user',
            })
            .then(result => {
                console.log(result)
                return res.redirect('/users/login')
            })
            .catch(error => console.log(error))
    },

    login: function (req, res) {
        res.render('login', {
            title: "Ingresa a tu cuenta",
            css: "login.css",
        })
    },
    processLogin: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.findOne({
                    where: {
                        email: req.body.email
                    }
                })
                .then(user => {
                    req.session.usuario = {
                        id: user.id,
                        nick: user.nombre + " " + user.apellido,
                        email: user.email,
                        imagen: user.imagen,
                        rol: user.rol
                    }
                    return res.redirect('/')
                })
                .catch(error => res.send(error))
        } else {
            res.render('login', {
                title: "Ingresa a tu cuenta",
                css: "login.css",
                errors: errors.mapped(),
                old: req.body
            })
        }


    },
    profile: function (req, res) {
        res.render('userProfile', {
            title: "Perfil de usuario",
            css: "profile.css",
            usuario: req.session.usuario
        })
    },
    updateProfile: function(req,res){
        if(req.files[0]){
            if(fs.existsSync(path.join(__dirname,'../../public/images/users/'+req.session.usuario.imagen))){
                fs.unlinkSync(path.join(__dirname,'../../public/images/users/'+req.session.usuario.imagen))
                res.locals.usuario.imagen = req.files[0].filename
            }

        }
        db.User.update(
            req.session.usuario =
            {
                nombre : req.session.usuario.nombre,
                apellido : req.session.usuario.apellido,
                fecha_de_nacimiento: req.body.fecha_de_nacimiento,
                imagen:(req.files[0])?req.files[0].filename:req.session.usuario.imagen,
                domicilio: req.body.domicilio.trim(),
            },
            {
                where:{
                    id:req.params.id
                }
            }
        )
        .then( result => {
          console.log(req.session.usuario)

          return res.redirect('/users/profile')
          })
        .catch(err => {
            console.log(err)
        })
    },
    logout: function (req, res) {
        req.session.destroy();
        if (req.cookies.userTheBestBikes) {
            res.cookie('userTheBestBikes', ' ', {
                maxAge: -1
            })
        }
        return res.redirect('/')
    },
    delete: function (req, res) {

    }

}