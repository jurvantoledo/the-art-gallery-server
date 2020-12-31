'use strict';
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "test",
          lastName: "user",
          email: "test@test.com",
          phone: "+31 611111111",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          country: "Netherlands",
          city: "Amsterdan",
          imageUrl: "https://i.ytimg.com/vi/78_9EEEErZo/hqdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          lastName: "dumbdumb",
          email: "dummy@dumb.com",
          phone: "+31 622222222",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          country: "Germany",
          city: "Berlin",
          imageUrl: "https://i.kym-cdn.com/entries/icons/facebook/000/001/106/maxresdefault.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {})
  }
};
