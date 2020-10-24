module.exports = (sequelize, dataTypes) => {
    let alias = "categorie";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false, 
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        foto:{
            type:dataTypes.STRING(45),
            allowNull:true
        }
    }
    let config = {
        tablaName: "categories",
        timestamps:false
    }
    const categorie = sequelize.define(alias,cols,config);

   /* categorie.associate = function(models){
        categorie.hasMany(models.products,{
            as:"producto",
            foreignKey:"categoria_id"
        })
    }*/
    return categorie;
}