module.exports = (sequelize, dataTypes) => {
    let alias = "Sale";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        id_usuario:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        id_producto:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    let config = {
        tablaName: "sale-buy",
        timestamps:true,
        underscored:true
    }
    let sale = sequelize.define(alias,cols,config);

    sale.associate = function(models){
        sale.belongsTo(models.User,{
            as:"compra-usuario",
            foreignKey:"id_usuario"
        })
        sale.belongsTo(models.Product,{
            as:"compra-producto",
            foreingKey:"id_producto"
        })
    }

    return sale;
}
