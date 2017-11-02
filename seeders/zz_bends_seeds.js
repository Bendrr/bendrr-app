'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bends', [
      {
      interestedInStatusID: 1,
      safetyStatusID: 1,
      spendStatusID: 1,
      statusStatusID: 1,
      userID: 1,
      current_bend: false
      },
      {
      interestedInStatusID: 2,
      safetyStatusID: 2,
      spendStatusID: 2,
      statusStatusID: 2,
      userID: 1,
      current_bend: false
      },
      {
      interestedInStatusID: 3,
      safetyStatusID: 3,
      spendStatusID: 3,
      statusStatusID: 3,
      userID: 1,
      current_bend: false
      },
      {
      interestedInStatusID: 4,
      safetyStatusID: 3,
      spendStatusID: 4,
      statusStatusID: 4,
      userID: 1,
      current_bend: false
      },
      {
      interestedInStatusID: 5,
      safetyStatusID: 3,
      spendStatusID: 5,
      statusStatusID: 5,
      userID: 1,
      current_bend: true
      },
      
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bends');
  }
};
