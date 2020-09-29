const Sequelize = require('sequelize');
var sqldb = {};
//TODO: Forced Sync True https://sequelize.org/master/manual/model-instances.html
const sequelize = new Sequelize('test', 'root', 'admin@123456', {
    //host: "localhost",
    host: "127.0.0.1",
    port: 3306,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});

sqldb.sequelize = sequelize;
sqldb.Sequelize = Sequelize;

module.exports = sqldb;
