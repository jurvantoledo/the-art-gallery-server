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
          price: "9,99",
          galleryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob's really awesome artwork",
          image: "https://cdn.getyourguide.com/img/tour/5afd36c552979.jpeg/146.jpg",
          description: "awesome art someone made",
          price: "9,99",
          galleryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bob's Beautiful artwork",
          image: "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          description: "awesome art someone made",
          price: "19,99",
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
