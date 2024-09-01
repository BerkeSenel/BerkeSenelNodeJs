'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('UserBooks', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId:{
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
      },
      bookId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'books',
          },
          key: 'id',
        },
        allowNull:false,
      },
      rating: {
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull:false
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull:false
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull:true
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('UserBooks');
  }
};
