const { Router } = require('express');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const clientesController = require('./controllers/clientesController');
const carrosController = require('./controllers/carrosController');

const authMiddleware = require('./middlewares/Auth');
const routes = Router();

routes.post('/login', authController.index);
routes.post('/register', authController.store);
routes.get('/usuarios', userController.index);

//sessão de clientes
routes.get('/showClitens', authMiddleware, clientesController.index)
routes.post('/createCliente', authMiddleware, clientesController.created)
routes.post('/detailsCliente', authMiddleware, clientesController.details)
routes.put('/updateCliente', authMiddleware, clientesController.update)
routes.delete('/deleteCliente', authMiddleware, clientesController.delete)

//sessão de carros
routes.get('/showCarros', authMiddleware, carrosController.index)
routes.post('/createCarros', authMiddleware, carrosController.created)
routes.post('/detailsCarros', authMiddleware, carrosController.details)
routes.put('/updateCarros', authMiddleware, carrosController.update)
routes.delete('/deleteCarros', authMiddleware, carrosController.delete)

module.exports = routes;
