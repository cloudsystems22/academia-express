const { Router } = require('express');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const clientesController = require('./controllers/clientesController');
const carrosController = require('./controllers/carrosController');
const pedidosController = require('./controllers/pedidosController');
const relatoriosController = require('./controllers/relatoriosController');

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

//sessão de pedidos
routes.get('/showPedidos', authMiddleware, pedidosController.index)
routes.post('/createPedido', authMiddleware, pedidosController.created)
routes.post('/detailsPedido', authMiddleware, pedidosController.details)
routes.put('/updatePedido', authMiddleware, pedidosController.update)
routes.delete('/deletePedido', authMiddleware, pedidosController.delete)

//sessão de relatórios
routes.get('/maisProcurado', authMiddleware, relatoriosController.maisProcurado)
routes.get('/aluguelCompra/:ano&:mes', authMiddleware, relatoriosController.aluguelCompra)

module.exports = routes;
