
const usuarios = require('../data/usuarios');
const bcrypt = require('bcrypt');

const fs = require('fs');
const path = require('path');

module.exports = {
    registrate:function(req,res){
        res.render('register',{
            title: "Registrate aqui",
            css: "register.css"
        })
    },
    processRegister:function(req,res){
        let lastID = usuarios.length;
        
            let nuevoUsuario = {
                id:lastID +1,
                name: req.body.name,
                apellido: req.body.apellido,
                email: req.body.email,
               password: bcrypt.hashSync(req.body.password,10),
               fecha: req.body.fecha,
               image: req.files[0].filename,
            };
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(usuarios),'utf-8');
            res.render('login',{
             title:"Gracias por registrarte, ingresá a tu cuenta",
             css: "login.css"
            });
     },
}
