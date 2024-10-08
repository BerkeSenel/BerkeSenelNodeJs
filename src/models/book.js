'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsToMany(models.User, { through: models.UserBook, foreignKey: 'BookId' });
    }
  }
  Book.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    avgRating: {
      type:DataTypes.FLOAT,
      allowNull:false,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Book',
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['createdAt','updatedAt','deletedAt']
      },
      order: [['name', 'DESC']]
    },
    hooks: {
      afterCreate (user,options) {
        delete user.dataValues.createdAt
        delete user.dataValues.updatedAt
        delete user.dataValues.avgRating
      }
    }
  });
  return Book;
};