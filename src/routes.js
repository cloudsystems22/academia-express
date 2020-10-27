const express = require('express');
const authControler = require('./controllers/authController');
const routes = express.Router();

const authController = require('./controllers/authController')

routes.get("/", (req, res) => {
    try{
        return res.send('<h1>Bem vindo!</h1><p>API!</p>');
    } catch(err) {
        return res.status(400).send({ error: "Erro ao exibir index!"});
    }
})

routes.post('/login', authControler.index);
routes.post('/register', authControler.store);


module.exports = routes;