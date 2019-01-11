const express = require('express');
const configureMiddleware = require("../config/middleware.js");

const projectsRouter = require('./projectsRouter/projectsRouter.js')

const server = express();

configureMiddleware(server);

server.use('/projects', projectsRouter)

module.exports = server;