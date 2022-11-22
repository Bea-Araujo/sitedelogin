const User = require('../model/userModel');

async function getAllUsers(req, res) {
    const users = await User.findAll()
    res.json(users)
}

async function getUserById(req, res) {
    const id = req.params.id
    const user = await User.findOne({ where: { id } });
    res.send(user)
}

async function putUserById(req, res) {
    const { name, email, senha, avatar, dataNac, ativo } = req.body;
    const id = req.params.id;
    const user = await User.findOne({ where: { id } });

    user.name = name
    user.email = email
    user.senha = senha
    user.avatar = avatar
    user.dataNac = dataNac
    user.ativo = ativo

    await user.save();
    res.sendStatus(201)
}

async function deleteUserById(req, res) {
    const { ativo } = req.body;
    const id = req.params.id;
    const user = await User.findOne({ where: { id } });

    user.ativo = '0'
    await user.save();
    res.sendStatus(202)
}

async function createUser(req, res) {
    await User.create(req.body);
    res.sendStatus(201);
}


module.exports = { getAllUsers, getUserById, putUserById, deleteUserById, createUser }