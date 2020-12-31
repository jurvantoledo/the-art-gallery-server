'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "galleries",
      [
        {
          name: "The Art Gallery",
          description: "An awesome gallery of all Jur's work over the past view years",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),          
        },
        {
          name: "Artsy For You",
          description: "An awesome gallery from Dummy DumbDumb",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),          
        }
      ]
      )
  },

  down: async (queryInterface, Sequelize) => {
   return await queryInterface.bulkDelete("galleries", null, {})
  }
};
