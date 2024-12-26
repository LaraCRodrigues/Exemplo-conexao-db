
const Sequelize =  require('sequelize');
const sequelize =  new Sequelize('crud','root','01082004',{
    dialect:'mysql',
    host:'localhost',
    port: 3306
});
module.exports = sequelize;