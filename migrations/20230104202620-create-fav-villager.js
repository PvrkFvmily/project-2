'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favVillagers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      villagerId: {
        type: Sequelize.INTEGER
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      personality: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      hobby: {
        type: Sequelize.STRING
      },
      catch_phrase: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favVillagers');
  }
};