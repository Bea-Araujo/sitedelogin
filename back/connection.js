const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:mypass@localhost:/teste2')

module.exports = sequelize;