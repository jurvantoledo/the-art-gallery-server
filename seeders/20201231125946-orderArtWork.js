'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "orderArtWorks",
      [
        {
          orderId: 1,
          artWorkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          artWorkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
      )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("orderArtWork", null, {})
  }
};
