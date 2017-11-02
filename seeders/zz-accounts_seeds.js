'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accounts', [
      {
      user_name: "chachi@fonz.com",
      password: "GoPoundSaltDirtBag",
      userID: 1
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('accounts');
  }
};
