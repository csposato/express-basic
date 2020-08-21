const express = require('express');
const routes = require('../routes');

const server = express();
server.use(express.json());

server.get('/', (req, res) => res.send('Hello World!'));
server.use('', routes);
module.exports = server;
