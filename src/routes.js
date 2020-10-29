const { Router } = require('express');
const authController = require('./controllers/authController');
const productController = require('./controllers/Product');
const userController = require('./controllers/userController');
const clientesController = require('./controllers/clientesController');
const carrosController = require('./controllers/carrosController');

const authMiddleware = require('./middlewares/Auth');
const routes = Router();

routes.post('/login', authController.index);
routes.post('/register', authController.store);
routes.get('/usuarios', userController.index);

//sessão de clientes
routes.get('/showClitens', clientesController.index)
routes.post('/createCliente', clientesController.created)
routes.post('/detailsCliente', clientesController.details)
routes.put('/updateCliente', clientesController.update)
routes.delete('/deleteCliente', clientesController.delete)

//sessão de carros
routes.get('/showCarros', carrosController.index)
routes.post('/createCarros', carrosController.created)
routes.post('/detailsCarros', carrosController.details)
routes.put('/updateCarros', carrosController.update)
routes.delete('/deleteCarros', carrosController.delete)

routes.get('/produtos', authMiddleware, productController.index);

module.exports = routes;
