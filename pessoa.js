
const Sequelize = require('sequelize');
const database = require('./db');

const Pessoa = database.define('pessoa',{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    

    },
    nome:{
       type: Sequelize.STRING,
       allowNull: false

    },

    dt_nasc:  Sequelize.DATE,
    descricao:  Sequelize.STRING,

})

module.exports =  Pessoa;

