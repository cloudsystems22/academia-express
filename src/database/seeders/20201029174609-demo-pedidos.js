'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('pedidos', [{
       data: '2018-08-12:08:45',
       diarias: '5',
       tipo: 'Aluguel',
       clientId: '1',
       carroId: '6'
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
