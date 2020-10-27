const sequelize = require('sequelize')
const configdatabase = require('../config/database')
const connection = new sequelize(configdatabase)

const authControler = {
    async index(req, res){
        try{
            const usuario = await connection.query('select * from users')
            res.send({ Ok: "Logado com sucesso!" })
        } catch(err){
            res.status(400).send({ error: 'Erro ao realizar login!' });
        }
    },
    show(id){},
    store(){},
    update(id){},
    delete(id){},

}

module.exports = authControler;