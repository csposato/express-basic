const express = require('express');
const routes = require('../routes');

const server = express();
server.use(express.json());

server.get('/', (req, res) => res.send('Hello World!'));
server.use('', routes);
const a = 5;
if ((a = 3)) {
    console.log('no');
}
module.exports = server;
