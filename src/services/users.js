const repository = require('../repositories/user')
const bookRepository = require('../repositories/book')
const models = require('../models');
const sequelize = models.sequelize
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
        const user = await repository.getOneUserWithAllBooks(id)
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

exports.borrowBook = async function (userId, bookId) {
    try {
        const user = await repository.getOne(userId)
        const book = await bookRepository.getBookWithUsers(bookId)
        if (book.Users.length) throw "The book has already been borrowed";
        await user.addBook(book);
    } catch (err) {
        console.log("Error on borrowing book : ",err)
        throw err
    }
}

exports.returnBook = async function (userId, bookId, score) {
    try {
        const user = await repository.getOne(userId)
        const bookUsers = await bookRepository.getBookWithAllUsers(bookId);
        const foundBook = user.Books.find((item) => item.id === parseInt(bookId));
        if(!foundBook) throw "User does not have this book "
        await sequelize.transaction(async t => {
            let totalRating = score
            bookUsers.forEach(element => {
                totalRating += element.rating || 0
             });
             const avgRating = totalRating / bookUsers.length
             foundBook.UserBook.rating = score
             await foundBook.UserBook.save({ transaction: t });
             await bookRepository.updateBookById(bookId, {avgRating: avgRating}, t)
             await user.removeBook(
                foundBook,
              { transaction: t },
            );
          });
    } catch (err) {
        console.log("Error on returnBook book : ",err)
        throw err
    }
}
