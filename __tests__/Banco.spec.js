// Import the mock library
const SequelizeMock = require('sequelize-mock');

// Setup the mock database connection
const DBConnectionMock = new SequelizeMock();

// Define our Model
const UserMock = DBConnectionMock.define('users', {
        'email': 'email@example.com',
        'username': 'blink',
        'picture': 'user-picture.jpg',
    }, {
        instanceMethods: {
            myTestFunc: function () {
                return 'Test User';
            },
        },
    });
