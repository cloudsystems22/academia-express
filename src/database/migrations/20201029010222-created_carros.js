'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('carros', { 
       id: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement:true
       },
       modelo: Sequelize.STRING(150),
       marca: Sequelize.STRING(105),
       ano: Sequelize.INTEGER,
       renavam: {
        type:Sequelize.STRING(15),
        allowNull: false
       },
       placa:Sequelize.STRING(45),
       cor:Sequelize.STRING(45),
       preco_aluguel: Sequelize.DECIMAL(10,3),
       preco_compra: Sequelize.DECIMAL(10,3),
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
