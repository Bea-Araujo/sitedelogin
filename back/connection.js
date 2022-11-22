const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:mypass@localhost:3306/teste2')

module.exports = sequelize;