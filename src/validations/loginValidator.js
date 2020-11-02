const {check,validatorResult,body} = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models')

module.exports = [
    check('email')
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .isLength({
        min:1
    })
    .withMessage('Escribe tu contraseña'),
    

    body('password')
    .custom((value,{req})=>{
       
        return db.User.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user => {
            if(!bcrypt.compareSync(value,user.dataValues.password)){ 
                return Promise.reject('contraseña incorrecta')
            }
        })
        .catch(() => {
            return Promise.reject('Credenciales inválidas')
        })
    })
]
