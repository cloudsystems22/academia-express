const request = require('supertest');
const app = require('../src/app');

test('Deveria retornar 201', async () => {
    const response = await request(app).post('/login').send({
      email: 'vini123@email.com',
      password: '123',
    });
  
    //expect(response.body).toHaveProperty('email');
    expect(response.status).toBe(200);
});

test('Deveria retornar Id', async () => {
    const response = await request(app).post('/login').send({
      email: 'vini123@email.com',
      password: '123',
    });
  
    expect(response.body).toHaveProperty('id');
    
});

test('Deveria retornar 401', async () => {
    const response = await request(app).post('/login').send({
      email: 'vini@email.com',
      password: '1234',
    });
  
    expect(response.status).toBe(401);
    
});

test('Deveria retornar Token', async () => {
    const response = await request(app).post('/login').send({
      email: 'vini123@email.com',
      password: '123',
    });
  
    expect(response.body).toHaveProperty('token');
    
});


  