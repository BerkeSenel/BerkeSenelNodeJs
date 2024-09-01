const repository = require('../repositories/book')
exports.getAll = async function (req, res) {
    try {
        const allBooks = await repository.getAll()
        return allBooks
    } catch (err) {
        console.log("Error on getAll books : ",err)
        throw err
    }
  
}

exports.getOne = async function (id) {
    try {
        const user = await repository.getOne(id)
        return user
    } catch (err) {
        console.log("Error on getOne book : ",err)
        throw err
    }
}

exports.create = async function (body) {
    try {
        const { name } = body;
        const newBookObject = { name }
        const newBook = await repository.create(newBookObject)
        return newBook
    } catch (err) {
        console.log("Error on creating book : ",err)
        throw err
    }
}