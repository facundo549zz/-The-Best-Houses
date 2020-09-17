const usuarios = require('../data/usuarios');

const fs = require('fs');
const path = require('path');

module.exports = {
    registrate:function(req,res){
        res.render('register',{
            title: "registro",
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
               password: req.body.password,
               fecha: req.body.fecha
                
            };
            usuarios.push(nuevoUsuario);
            fs.writeFileSync(path.join(__dirname,'..','data','users.json'),JSON.stringify(usuarios),'utf-8');
            res.render('register',{
             title:"Gracias por registrarte, ingresá a tu cuenta",
             css: "register.css"
            });
        
        
     },
}
