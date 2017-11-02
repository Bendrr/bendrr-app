'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
        {
        first_name: "Wan",
        last_name: "Valdez",
        sex: "male",
        age: 47,
        tag_line: "Who is your daddy?",
        email: "wanvaldez@pimpinstrong.com",
        sms_phone: "440.555.1234",
        profile_pic: "https://www.pinterest.com/pin/11399805284338369/"
        }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
