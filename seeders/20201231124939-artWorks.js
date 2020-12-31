'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "artWorks",
      [
        {
          name: "Jur's awesome artwork",
          image: "https://cdn.discordapp.com/attachments/739099755308777502/788466819119841300/20201215_190429.jpg",
          description: "awesome art work I made in my spare time for a friend",
          galleryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dummy's not so awesome artwork",
          image: "https://cdn.getyourguide.com/img/tour/5afd36c552979.jpeg/146.jpg",
          description: "awesome art I made",
          galleryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
      )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("artWorks", null, {})

  }
};
