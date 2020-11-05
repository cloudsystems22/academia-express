const request = require('supertest');
const app = require('../src/app');
const { DataTypes } = require('sequelize')
const SequelizeMock = require('sequelize-mock');
const ProdutoModel = require('../src/models/Produto');
const DBConnectionMock = new SequelizeMock();

const Produto = ProdutoModel(DBConnectionMock, DataTypes);


test('Deveria criar um produto', async() => {
    const { produto, qtd, preco } = request.body;
    const produto = await Produto.create({ produto, qtd, preco })
    expect(Array.isArray(produto)).toBe(true)
})

test('Deveria retornar uma lista de produtos', async () => {
    const produtos = await Produto.findAll();
    expect(Array.isArray(produtos)).toBe(true)
})

test('Deveria editar um produto', async () => {
    const { id, produto, qtd, preco } = request.body;
    const produto = await Produto.update({ produto, qtd, preco }, {where:{ id }})
    expect(request.status).toBe(201)
})

test('Deveria deletar um produto', async () => {
    const { id } = request.body;
    const produto = await Produto.destroy({ where:{ id } })
    expect(request.status).toBe(201)
})