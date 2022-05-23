const {DataTypes, Sequelize} = require('sequelize');


module.exports = (Sequelize) =>{
    Sequelize.define('type',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamp:false
    });
};