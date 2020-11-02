let usuarios = require('../data/usuarios');

let db = require('../database/models')

const {check,validationResult,body} = require('express-validator');

module.exports = [
    check('name')
    .isLength({
        min:1
    })
    .withMessage("Debes ingresar tu nombre"),

    check('apellido')
    .isLength({
        min:1
    })
    .withMessage("Debes ingresar tu apellido"),

    body('email')
    .custom(function(value){
        return db.user.findOne({
            where:{
                email:value
            }
            })
            .then(user => {
                if(user){
                    return Promise.reject('Este mail ya está registrado')
                }
            })
    }),

    check('email')
    .isEmail()
    .withMessage("Debes ingresar un email válido"),

    check('password')
    .isLength({
        min:6,
        max:12
    })
    .withMessage("Debes ingresar una contraseña entre 6 y 12 caracteres"),

    check('bases')
    .isString("on")
    .withMessage("Debe aceptar las bases y condiciones"),

    body('image')
    .custom((value,{req})=>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    }).withMessage("Solo se permite png, jpg, jpeg, gif")

    .custom(req => {
        if(!reqfiles[0]){
            return false
        }else{
            return true
        }
    }).withMessage("Tenés que subir una imagen")
]
