'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserBook.belongsTo(models.User, { foreignKey: 'UserId' });
      UserBook.belongsTo(models.Book, { foreignKey: 'BookId' });
    }
  }
  UserBook.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rating:{
      type:DataTypes.INTEGER,
      allowNull:true,
    }
  }, {
    sequelize,
    modelName: 'UserBook',
    paranoid: true,
  });
  return UserBook;
};