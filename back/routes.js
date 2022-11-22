const express = require("express");
const router = express.Router();

const UserController = require('./controller/userController')

router.route('/users')
    .get(UserController.getAllUsers)
    .post(UserController.createUser);

router.route("/user/:id")
    .get(UserController.getUserById)
    .put(UserController.putUserById)
    .delete(UserController.deleteUserById)

module.exports = router;