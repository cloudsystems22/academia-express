'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('clientes', { 
       id: {
        primaryKey:true,
        type: Sequelize.INTEGER,
        autoIncrement:true
       },
       name: { 
         type:Sequelize.STRING(250),
         allowNull: false
       },
       rg: { 
        type:Sequelize.STRING(9),
        allowNull: false
      },
      cpf: { 
        type:Sequelize.STRING(14),
        allowNull: false
      },
      logradouro: Sequelize.STRING(45),
      numero: Sequelize.STRING(5),
      bairro: Sequelize.STRING(45),
      cep: Sequelize.STRING(15),
      cidade: Sequelize.STRING(45),
      uf: Sequelize.STRING(45),
      email: Sequelize.STRING(45),

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
