module.exports=function(sequelize,dataTypes){
    let alias='Product';
    let cols={
        product_id:{
            type : dataTypes.INTEGER

        }
    }
    let config={
        tablename:'products',
        timestamps:false
    }
    let Product=sequelize.define(alias,cols,config);
    Product.associate=function(models){
        Product.belongsTo(models.Winerie,{
            as:'wineries',
            foreignkey :'winerie_id'
            
        })
        
}

}