const sqldb=require('./dbconfig/sqldb.config')
const postgresdb=require('./dbconfig/postgresdb.config')
const mongodb=require('./dbconfig/mongodb.config')


sql = sqldb.sequelize;
postgres = postgresdb.postgressequelize;   
     
sql.authenticate()
.then(() =>console.log('MySqlDataBase Connected'))
.catch(err =>console.log('Error:'+err))
/*
postgres.authenticate()
.then(() =>console.log('postgresDataBase Connected'))
.catch(err =>console.log('Error:'+err))
*/

mongodb.on('error', console.error.bind(console, 'MongoDB connection error:'))
.then(() =>console.log('MongoDB Connected'));