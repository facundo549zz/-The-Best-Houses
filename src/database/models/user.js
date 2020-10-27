
module.exports= (sequelize, dataTypes) => {

    let alias = "user";

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull:false, //permite nulo?
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false,
            validate: {
                isAlpha:{
                    args:true,
                    msg:"El nombre solo puede contener letras"
                }
            }
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull:false,
            validate: {
                isAlpha:{
                    msg:"El apellido solo puede contener letras"
                }
            }
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull:false,
            unique:true, //no permite que se registre el mismo usuario
        },
        password:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        fecha:{
            type:dataTypes.DATEONLY()
        },
        imagen:{
            type:dataTypes.STRING(45)
        },
        domicilio:{
            type:dataTypes.STRING(45)
        },
    }

    let config = {
        tableName: "users",
        timestamps: true,
        underscored:true
    }

    const user = sequelize.define(alias, cols, config);

    user.associate = function(models){
        user.hasMany(models.sale, { 
            as:"compra-usuario",
            foreignKey:"id_usuario"
        })
    }
    return user;
}