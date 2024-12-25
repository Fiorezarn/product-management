"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const series = [];

    for (let i = 1; i <= 30; i++) {
      series.push({
        name: faker.commerce.productAdjective(),
        product_id: faker.number.int({ min: 1, max: 20 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Series", series, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Series", null, {});
  },
};
