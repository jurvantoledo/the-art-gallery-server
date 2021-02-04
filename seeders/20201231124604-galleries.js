'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "galleries",
      [
        {
          name: "The Art Gallery",
          description: "An awesome gallery of all Jur's work over the past view years",
          imageUrl: "https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),          
        },
        {
          name: "Art For You",
          description: "An awesome gallery from Bob located in Germany, Berlin",
          imageUrl: "https://images.pexels.com/photos/4503762/pexels-photo-4503762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
