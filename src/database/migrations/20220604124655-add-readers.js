'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'readers',
      'membership',
      {
        type: Sequelize.BOOLEAN
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('readers', 'membership')
  }
};
