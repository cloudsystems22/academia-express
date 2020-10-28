const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({ error: 'Token não especificado!'});
    
    const parts = authHeader.split(' ');
    if(!parts.length === 2)
        return res.status(401).send({ error: 'Erro no token!'});

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token mal formatado!'});

    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token inválido!'});

        req.userId = decoded.id;
        return next();
    });
};