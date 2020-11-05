const request = require('supertest');
const app = require('../src/app');
const { DataTypes } = require('sequelize')
const SequelizeMock = require('sequelize-mock');
const UserModel = require('../src/models/User');