const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(process.env.PORT || 3001, () => {
    console.log('Ouvindo a porta ::.. localhost:3001')
});