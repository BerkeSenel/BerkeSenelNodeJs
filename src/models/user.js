'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Book, { through: models.UserBook, foreignKey: 'UserId' });
    }
  }
  User.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'User',
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
      }
    }
  });
  return User;
};