const express = require('express');
const configureMiddleware = require("../config/middleware.js");

const projectsRouter = require('./projectsRouter/projectsRouter.js')
const actionsRouter = require('./actionsRouter/actionsRouter.js')

const server = express();

configureMiddleware(server);

server.use('/projects', projectsRouter)
server.use('/actions', actionsRouter)

module.exports = server;