const Sequelize =  require('sequelize');
const ConfigDatabase = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const authConfig = require('../utils/auth.json');
const { QueryTypes } = require('sequelize');

const connection = new Sequelize(ConfigDatabase);

function generationToken(params = {}){
    return jwt.sign(params, process.env.APP_SECRET, {
        expiresIn: 86400,
    });
}

const authController = {
    async index(req, res) {
        const { email, password } = req.body;
    
        const [user] = await connection.query(
          'select id, email, password from users where email=$email',
          {
            type: QueryTypes.SELECT,
            bind: { email },
          },
        );
    
        if (!user) {
          return res.status(401).json({ message: 'Credenciais inválidas!' });
        }
    
        if (!bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ message: 'Credenciais inválidas!' });
        }
          
    
        return res.status(200).json({ id: user.id, token: generationToken({ id: user.id }) });
    },
    
    async logar(req, res){
        //recebendo as informações do body
        const { email, password } = req.body;
        //procurando um usuário
        const [user] = await connection.query(
            'select id, email, password from users where email=$email',
            {
              type: QueryTypes.SELECT,
              bind: { email },
            },
          );
                
        if(!user)
            return res.status(400).send({error: 'Usuário não encontrado!'});

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Credenciais inválidas!' });
        }

        res.send({ user, token: generationToken({ id: user.id }) });

    },

    show(req, res){},

    async store(req, res){
        const { name, email, password} = req.body
        const hashPassword = bcrypt.hashSync(password, 10);
        const now = new Date();
        const [idUser, err] = await connection.query(
            `INSERT INTO users (name, email, password, createdAt, updatedAt) VALUES ($name, $email, $password, $createdAt, $updatedAt)`, 
            {
            bind: {name, email, password: hashPassword, createdAt: now, updatedAt: now}
        })
        if(!err){
            return res.status(400).json({details:"Usuario não criado, tente novamente!"})
        }
       
       return res.status(201).json({id:idUser, name, email, token: generationToken({ id: idUser })})
    },
    
    update(req, res){},

    delele(req, res){}
}

module.exports = authController