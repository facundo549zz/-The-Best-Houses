
module.exports= (sequelize, dataTypes) => {

    let alias = "product";

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true,
        },
        marca:{
            type:dataTypes.STRING(45),
            allowNull:false,
            
        },
        nombre:{
            type:dataTypes.STRING(100),
            allowNull:false,
            
        },
        precio:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
        },
        color:{
            type:dataTypes.STRING(30),
            allowNull:true,
        },
        descripcion:{
            type:dataTypes.TEXT(),
            allowNull:false
        },
        fotos:{
            type:dataTypes.STRING(255)
        },
        categoria_id:{
            type:dataTypes.INTEGER(11)
        },
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored:true
    }

    const product = sequelize.define(alias, cols, config);

    product.associate = function(models){
        product.belongsTo(models.categorie,{ 
            as:"categoria",
            foreignKey:"categoria_id"
        })
    
        product.hasMany(models.sale,{ 
            as:"compra-producto",
            foreignKey:"id_producto"
        })
    }
    return product;
}