'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id:{
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      name:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};
