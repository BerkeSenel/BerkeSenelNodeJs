'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Books', {
      id:{
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      },
      avgRating: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull:false,
        defaultValue:0,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Book');
  }
};
