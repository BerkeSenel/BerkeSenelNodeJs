'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
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
    return queryInterface.dropTable('Users');
  }
};
