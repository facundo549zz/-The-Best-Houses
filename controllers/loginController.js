const usuarios = require('../data/usuarios');
const productos = require('../data/products');

const fs = require('fs');
const path = require('path');

module.exports = {
    login: function (req, res) {
        res.render('login', {
            title: "Ingresa a tu cuenta",
            css: "login.css",
            usuario: req.session.usuario
        })
    },
    processLogin: function (req, res) {
        usuarios.forEach(usuario => {
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
                res.redirect('/login/profile')
            } else {
                res.render('login', {
                    title: "Ingresá a tu cuenta",
                    css: "login.css",
                    old: req.body,
                    usuario: req.session.usuario
                })
            }
        });

    },
    profile: function (req, res) {
        res.render('userProfile', {
            title: "Perfil de usuario",
            productos: productos.filter(producto => {
                return producto.category != "todosLosProductos" && producto.category != "montaña" && producto.category != "infantil" && producto.category != "ruta" && producto.category != "BMX" && producto.category != "urbana"
            }),
            css: "profile.css",
            usuario: req.session.usuario
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
    Cargar: function (req, res) {
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