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
      // define association here
    }
  }
  Book.init({
    id:{
      type:DataTypes.UUID,
      allowNull: false,
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
  });
  return Book;
};