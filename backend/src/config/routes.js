const express = require('express');

module.exports = function(app) {

    //API ROUTES

    const router = express.Router();
    app.use('/api', router)


    //TODO ROUTES

    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}