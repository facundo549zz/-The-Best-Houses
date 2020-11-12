
let db = require('../database/models')

const {check,validationResult,body} = require('express-validator');

module.exports = [
    check('nombre')
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
        return db.User.findOne({
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
        min:1,
    })
    .withMessage("Debes ingresar una contraseña"),

    check('terminos')
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

   
]
