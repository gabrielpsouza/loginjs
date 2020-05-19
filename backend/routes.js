const express = require('express');
const UserController = require('./controller/UserController');

const routes = express.Router();

routes.get('/user', UserController.ListUsers);
routes.post('/user', UserController.AddUsers);

module.exports = routes;