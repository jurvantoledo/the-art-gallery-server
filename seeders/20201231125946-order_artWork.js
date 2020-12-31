'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "order-artWorks",
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
    return await queryInterface.bulkDelete("order-artWorks", null, {})
  }
};
