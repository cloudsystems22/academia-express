const request = require('supertest');
const app = require('../src/app');
const { DataTypes } = require('sequelize')
const SequelizeMock = require('sequelize-mock');
const UserModel = require('../src/models/User')

// Setup the mock database connection
const DBConnectionMock = new SequelizeMock();

const User = UserModel(DBConnectionMock, DataTypes);

// test('Deveria ser criado um novo usuario', async () => {
//     const response = await request(app).post('/register').send({
//       name: 'Vinicius Oliveira',
//       email: 'vini123@email.com',
//       password: '123',
//       createdAt: new Date(),
//       updatedAt: new Date()
//     });
  
//     expect(response.body).toHaveProperty('id');
//     expect(response.body).toHaveProperty('name');
//     expect(response.body).toHaveProperty('xz');
//   });
  
test('Deveria retornar uma lista de usuarios', async () => {
  const users = await User.findAll();
  expect(Array.isArray(users)).toBe(true)
})