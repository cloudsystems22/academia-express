'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('pedidos', [{
       data: '2018-08-12:08:45',
       diarias: '5',
       tipo: 'Aluguel',
       clienteId: '1',
       carroId: '6',
       createdAt: new Date(),
       updatedAt: new Date()
     }, {
      data: '2018-08-12:10:45',
      diarias: '7',
      tipo: 'Aluguel',
      clienteId: '2',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-08-12:08:45',
      diarias: '8',
      tipo: 'Aluguel',
      clienteId: '3',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-10-12:08:45',
      diarias: '30',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-11-12:08:45',
      diarias: '5',
      tipo: 'Aluguel',
      clienteId: '2',
      carroId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-10-11:08:45',
      diarias: '14',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-11-12:08:45',
      diarias: '3',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-08-12:08:45',
      diarias: '10',
      tipo: 'Aluguel',
      clienteId: '3',
      carroId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      data: '2018-09-12:08:45',
      diarias: '5',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      data: '2018-09-12:08:45',
      diarias: '5',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      data: '2019-08-12:08:45',
      diarias: '5',
      tipo: 'Aluguel',
      clienteId: '2',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     data: '2019-08-12:10:45',
     diarias: '7',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-08-12:08:45',
     diarias: '8',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-10-12:08:45',
     diarias: '30',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-11-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-10-11:08:45',
     diarias: '14',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-11-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-08-10:08:45',
     diarias: '10',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
     data: '2019-09-09:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-09-10:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
      data: '2019-08-12:08:45',
      diarias: '5',
      tipo: 'Aluguel',
      clienteId: '2',
      carroId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     data: '2019-08-12:10:45',
     diarias: '7',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '4',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-08-12:08:45',
     diarias: '8',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-10-12:08:45',
     diarias: '30',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-11-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '1',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-10-11:08:45',
     diarias: '14',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-11-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-08-12:08:45',
     diarias: '10',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '4',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
     data: '2019-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
      data: '2019-08-12:08:45',
      diarias: '10',
      tipo: 'Aluguel',
      clienteId: '3',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     data: '2019-08-12:10:45',
     diarias: '30',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-08-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '4',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-10-12:08:45',
     diarias: '20',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-11-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-10-11:08:45',
     diarias: '14',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '1',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-11-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-08-12:08:45',
     diarias: '10',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
     data: '2019-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2019-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
      data: '2020-08-12:08:45',
      diarias: '3',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '6',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
     data: '2020-08-12:10:45',
     diarias: '9',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-12-03:08:45',
     diarias: '23',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '4',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-10-12:08:45',
     diarias: '15',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-11-12:08:45',
     diarias: '25',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-10-11:08:45',
     diarias: '14',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '1',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-11-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-08-12:08:45',
     diarias: '10',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
     data: '2020-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '4',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2020-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
      data: '2018-08-12:08:45',
      diarias: '5',
      tipo: 'Aluguel',
      clienteId: '1',
      carroId: '6',
      createdAt: new Date(),
     updatedAt: new Date()
    }, {
     data: '2018-08-12:10:45',
     diarias: '7',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-08-12:08:45',
     diarias: '8',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-10-12:08:45',
     diarias: '30',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-11-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-10-11:08:45',
     diarias: '14',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-11-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '2',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-08-12:08:45',
     diarias: '10',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '5',
     createdAt: new Date(),
     updatedAt: new Date()
    }, {
     data: '2018-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },{
     data: '2018-09-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     data: '2019-08-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '6',
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
    data: '2019-08-12:10:45',
    diarias: '7',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-08-12:08:45',
    diarias: '8',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-10-12:08:45',
    diarias: '30',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-11-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '3',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-10-11:08:45',
    diarias: '14',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-11-12:08:45',
    diarias: '3',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-08-10:08:45',
    diarias: '10',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2019-09-09:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-09-10:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
     data: '2019-08-12:08:45',
     diarias: '5',
     tipo: 'Aluguel',
     clienteId: '2',
     carroId: '3',
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
    data: '2019-08-12:10:45',
    diarias: '7',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '4',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-08-12:08:45',
    diarias: '8',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-10-12:08:45',
    diarias: '30',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-11-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '1',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-10-11:08:45',
    diarias: '14',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-11-12:08:45',
    diarias: '3',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '3',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-08-12:08:45',
    diarias: '10',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '4',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2019-09-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-09-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '2',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
     data: '2019-08-12:08:45',
     diarias: '10',
     tipo: 'Aluguel',
     clienteId: '3',
     carroId: '6',
     createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2019-08-12:10:45',
    diarias: '30',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-08-12:08:45',
    diarias: '3',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '4',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-10-12:08:45',
    diarias: '20',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '3',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-11-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-10-11:08:45',
    diarias: '14',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '1',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-11-12:08:45',
    diarias: '3',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-08-12:08:45',
    diarias: '10',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2019-09-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2019-09-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '3',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
     data: '2020-08-12:08:45',
     diarias: '3',
     tipo: 'Aluguel',
     clienteId: '1',
     carroId: '6',
     createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2020-08-12:10:45',
    diarias: '9',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-12-01:08:45',
    diarias: '23',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '4',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-10-12:08:45',
    diarias: '15',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '3',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-11-12:08:45',
    diarias: '25',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '2',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-10-11:08:45',
    diarias: '14',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '1',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-11-12:08:45',
    diarias: '3',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-08-12:08:45',
    diarias: '10',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '5',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2020-09-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '4',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    data: '2020-09-12:08:45',
    diarias: '5',
    tipo: 'Aluguel',
    clienteId: '1',
    carroId: '3',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    data: '2019-08-12:08:45',
    diarias: '1',
    tipo: 'Compra',
    clienteId: '3',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
   data: '2019-08-12:10:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '5',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-08-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '4',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-10-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '3',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-11-12:08:45',
   diarias: '2',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '2',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-10-11:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '1',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-11-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '6',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-08-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '5',
   createdAt: new Date(),
    updatedAt: new Date()
  }, {
   data: '2019-09-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '6',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2019-09-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '3',
   carroId: '6',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
    data: '2020-08-12:08:45',
    diarias: '1',
    tipo: 'Compra',
    clienteId: '1',
    carroId: '6',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
   data: '2020-08-12:10:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '5',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
   data: '2020-12-05:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '4',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
   data: '2020-10-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '3',
   createdAt: new Date(),
    updatedAt: new Date()
  },{
   data: '2020-11-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '2',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
   data: '2020-10-11:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '1',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
   data: '2020-11-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '6',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
   data: '2020-08-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '5',
   createdAt: new Date(),
   updatedAt: new Date()
  }, {
   data: '2020-09-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '4',
   createdAt: new Date(),
   updatedAt: new Date()
  },{
   data: '2020-09-12:08:45',
   diarias: '1',
   tipo: 'Compra',
   clienteId: '1',
   carroId: '3',
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
