'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('pedidos', { 
       id: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement:true
       },
      data: Sequelize.DATE,
      diarias: Sequelize.INTEGER,
      tipo: Sequelize.STRING(45),
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'id'
        },
        allowNull: false
      },
      carroId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'carros',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull:false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull:false,
        type: Sequelize.DATE
      }

      });
     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
