
var postgresdb=require('../../config/dbconfig/postgresdb.config')

postgressequelize = postgresdb.postgressequelize,
postgresSequelize = postgresdb.postgresSequelize;
module.exports=sequelize.define( 
'customers',{

id:{
type:Sequelize.INTEGER,
primaryKey:true,
autoIncrement:true
},
name:{
type:Sequelize.STRING
},
email:{
    type:Sequelize.STRING
}

}, {
    timestamps: false,
    tableName: 'customers'
});

