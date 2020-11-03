
module.exports= (sequelize, dataTypes) => {

    let alias = "User";

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
        fecha_de_nacimiento:{
            type:dataTypes.DATE()
        },
        imagen:{
            type:dataTypes.STRING(45)
        },
        domicilio:{
            type:dataTypes.STRING(45)
        }, 
        rol:{
            type:dataTypes.STRING(45),
            allowNull: false
        }
    }

    let config = {
        tableName: "users",
        timestamps: false,
    }

    const user = sequelize.define(alias, cols, config);

    user.associate = function(models){
        user.hasMany(models.Sale, { 
            as:"usuario-compra",
            foreignKey:"id_producto", 
        })
        user.belongsToMany(models.Product, { 
            as:"productos",
            through: "sale-buy", //tabla intermedia
            foreignKey:"id_usuario", //clave foranea de esta tabla
            otherkey: "id_producto"
        })
    }
    return user;
}