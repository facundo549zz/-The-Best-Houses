const db = require('../database/models');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

module.exports = {
    register: function (req,res){
        res.render('register', {
            title: "Bienvenido admin",
            css: "register.css"
        })
    },
    processRegister: function(req,res){
        let errors = validationResult(req)
        errors
        db.User.create({
                nombre: req.body.nombre.trim(),
                apellido: req.body.apellido.trim(),
                email: req.body.email.trim(),
                password: bcrypt.hashSync(req.body.password.trim(), 10),
                fecha_de_nacimiento: req.body.fechaDeNacimiento.trim(),
                imagen: (req.files[0]) ? req.files[0].filename : "default.png",
                rol: 'admin',
            })
            .then(result => {
                console.log(result)
                return res.redirect('/users/login')
            })
            .catch(error => console.log(error))
    }
}