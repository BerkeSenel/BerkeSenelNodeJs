'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('UserBooks', {
      id:{
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      userId:{
        type: Sequelize.DataTypes.UUID,
        allowNull:false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
      },
      bookId: {
        type: Sequelize.DataTypes.UUID,
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
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
