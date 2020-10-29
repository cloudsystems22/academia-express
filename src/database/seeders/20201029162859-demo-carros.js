'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('carros', [{
       modelo: 'Tico',
       marca: 'Daewoo',
       ano:'1994',
       renavam:'70125016574',
       placa:'NEX-0281',
       cor:'Cinza',
       preco_aluguel:'197.560',
       preco_compra:'22130.800',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       modelo: 'J2 1.4 16V 5p Mec.',
       marca: 'JAC',
       ano:'2012',
       renavam:'03025273722',
       placa:'HWW-9773',
       cor:'Vermelho',
       preco_aluguel:'189.700',
       preco_compra:'32130.300',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       modelo: 'Engesa 4x4 2.5/4.1',
       marca: 'Engesa',
       ano:'1985',
       renavam:'13434833683',
       placa:'JHS-4984',
       cor:'Preto',
       preco_aluguel: '176.400',
       preco_compra: '23450.500',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       modelo: 'Gran Voyager LE 2.5',
       marca: 'Plymouth',
       ano: '1992',
       renavam: '11147059739',
       placa:'BLY-0582',
       cor:'Amarela',
       preco_aluguel: '146.434',
       preco_compra: '32460.510',
       createdAt: new Date(),
       updatedAt: new Date()
    },{
       modelo: 'Courier CLX 1.4i 16V',
       marca: 'Ford',
       ano: '1998',
       renavam: '31150027389',
       placa:'MXF-5310',
       cor:'Branco',
       preco_aluguel: '196.90',
       preco_compra: '45123.80',
       createdAt: new Date(),
       updatedAt: new Date()
   }, {
       modelo: 'Punto EL/ELX',
       marca: 'Fiat',
       ano: '1995',
       renavam: '37380046589',
       placa:'NFA-5477',
       cor:'Verde',
       preco_aluguel: '114.43',
       preco_compra: '33412.70',
       createdAt: new Date(),
       updatedAt: new Date()
   }, {
       modelo: '550 1.8 16V Turbo 170cv Aut.',
       marca: 'MG',
       ano: '2010',
       renavam: '72307473713',
       placa:'KAJ-4052',
       cor:'Amarelo',
       preco_aluguel: '154.20',
       preco_compra: '22130.80',
       createdAt: new Date(),
       updatedAt: new Date()
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
