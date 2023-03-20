const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-test_project1','root','Tarathakur@21',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize