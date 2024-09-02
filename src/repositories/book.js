const models = require('../models');
const Book = models.Book
const User = models.User
const UserBook = models.UserBook
exports.create = async function ({ name }) {
    try {
        const newBook = await Book.create({ name });
        return newBook
    } catch (err) {
        console.log("Error on repository create book : ", err)
        throw err
    }
}

exports.getAll = async function () {
    try {
        const allBooks = await Book.findAll();
        return allBooks
    } catch (err) {
        console.log("Error on repository getAll book : ", err)
        throw err
    }
}

exports.getOne = async function (id) {
    try {
        const book = await Book.findOne({ where: { id } });
        if (!book) throw "Book Not Found"
        return book
    } catch (err) {
        console.log("Error on repository getOne Book: ", err)
        throw err
    }
}

exports.getBookWithUsers = async function (id) {
    try {
        const book = await Book.findOne(
            {
                where: { id },
                include: [
                    {
                        model: User,
                        through: { 
                            model: UserBook
                          },
                    }
                ],
            }
        );
        if (!book) throw "Book Not Found"
        return book;
    } catch (err) {
        console.log("Error on repository getBookWithUsers user: ", err)
        throw err
    }
}

exports.getBookWithAllUsers = async function (id) {
    try {
        const userBooks = await UserBook.findAll({
            where: { BookId: id }, // Fetch by book ID
            paranoid: false, // Include soft-deleted UserBooks if needed
          });
        if (!userBooks.length) throw "Book not borrowed by the user"
        return userBooks;
    } catch (err) {
        console.log("Error on repository getBookWithAllUsers user: ", err)
        throw err
    }
}

exports.updateBookById = async function (id, updateObject, t) {
    try {
        const query = {
            where: {
                id,
            }
        }
        if (t) {
            query.transaction = t
        }
        await Book.update(
            updateObject,
            query
        );
    } catch (err) {
        console.log("Error on repository updateBookById user: ", err)
        throw err
    }
}