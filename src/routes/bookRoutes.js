var express = require('express');

var bookRouter = express.Router();


var router = function (nav) {
    'use strict';
    
    var bookController = require('../controllers/bookController.js')(null, nav);
    
    // Routes

    // Middleware
    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getList);

    bookRouter.route('/:id') // Express will atach whatever is after '/' to the request
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router; // app.js will execute this function and pass in nav