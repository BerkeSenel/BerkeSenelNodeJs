const models = require('../models');
const User = models.User

exports.create = async function ({ name }) {
    try {
        const newUser = await User.create({ name });
        return newUser
    } catch (err) {
        console.log("Error on repository create user : ",err)
        throw err
    }
}

exports.getAll = async function () {
    try {
        const allUsers = await User.findAll();
        return allUsers
    } catch (err) {
        console.log("Error on repository getAll user: ",err)
        throw err
    }
}

exports.getOne = async function (id) {
    try {
        const user = await User.findOne({ where: { id } });
        if (!user) throw "User Not Found"
        return user
    } catch (err) {
        console.log("Error on repository getOne user: ",err)
        throw err
    }
}