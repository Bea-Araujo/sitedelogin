const {
    Model,
    DataTypes
} = require("sequelize");

const sequelize = require('../connection');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING
    },
    avatar: {
        type: DataTypes.STRING
    },
    dataNac: {
        type: DataTypes.DATE
    },
    ativo: {
        type: DataTypes.STRING,
        value: '1'
    }

}, {
    sequelize,
    modelName: "User",
    timestamps: false
});

module.exports = User