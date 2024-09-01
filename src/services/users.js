const repository = require('../repositories/user')
exports.getAll = async function (req, res) {
    try {
        const allUsers = await repository.getAll()
        return allUsers
    } catch (err) {
        console.log("Error on getAll user : ",err)
        throw err
    }

}

exports.getOne = async function (id) {
    try {
        const user = await repository.getOne(id)
        return user
    } catch (err) {
        console.log("Error on getOne user : ",err)
        throw err
    }

}

exports.create = async function (body) {
    try {
        const { name } = body;
        const newUserObject = { name }
        const newUser = await repository.create(newUserObject)
        return newUser
    } catch (err) {
        console.log("Error on creating user : ",err)
        throw err
    }
}

exports.borrowBook = async function (req, res) {
    try {
        
       
    } catch (err) {
        
    }

}

exports.returnBook = async function (req, res) {
    try {
        
       
    } catch (err) {
        
    }

}
