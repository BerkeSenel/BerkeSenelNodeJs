const models = require('../models');
const Book = models.Book
exports.create = async function ({ name }) {
    try {
        const newBook = await Book.create({ name });
        return newBook
    } catch (err) {
        console.log("Error on repository create book : ",err)
        throw err
    }
}

exports.getAll = async function () {
    try {
        const allBooks = await Book.findAll();
        return allBooks
    } catch (err) {
        console.log("Error on repository getAll book : ",err)
        throw err
    }
}

exports.getOne = async function (id) {
    try {
        const book = await Book.findOne({ where: { id } });
        if (!book) throw "Book Not Found"
        return book
    } catch (err) {
        console.log("Error on repository getOne Book: ",err)
        throw err
    }
}