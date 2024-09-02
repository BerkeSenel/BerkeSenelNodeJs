const models = require('../models');
const User = models.User
const Book = models.Book
const UserBook = models.UserBook

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

exports.getOneUserWithAllBooks = async function (id) {
    try {
        /*
        If the user returned a book that he borrowed before and then borrowed it again, 
        I was caught in the unique problem here. 
        I continued with the code below in case this happens.
        const user = await User.findOne(
            {
                 where: { id },
                 include: [
                    {
                        model: Book,
                        through: { 
                            model: UserBook,
                            paranoid:false
                          },
                    }
                ], 
            }
        );
        */
        const user = await User.findOne({where: { id },});
        if (!user) throw "User Not Found"
        const userBooks = await UserBook.findAll({
            where: { UserId: id },
            include: [
              {
                model: Book,
                paranoid: false, 
              },
            ],
            paranoid: false,
          });
          const userWithBooks = {
            ...user.toJSON(), 
            userBooks: userBooks.map(ub => ub.toJSON()) 
          };
        return userWithBooks
    } catch (err) {
        console.log("Error on repository getOneUserWithAllBooks user: ",err)
        throw err
    }
}

exports.getOne = async function (id) {
    try {
        const user = await User.findOne(
            {
                 where: { id },
                 include: [
                    {
                        model: Book,
                        through: { 
                            model: UserBook,
                          },
                    }
                ], 
            }
        );
        return user
    } catch (err) {
        console.log("Error on repository getOne user: ",err)
        throw err
    }
}