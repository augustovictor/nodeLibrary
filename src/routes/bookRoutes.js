var express = require('express');

var bookRouter = express.Router();

// BOOKS
var books = [
    {
        title: 'Book 1',
        gender: 'Gender 1',
        author: 'Author 1',
        read: false
    },
    {
        title: 'Book 2',
        gender: 'Gender 2',
        author: 'Author 2',
        read: false
    },
    {
        title: 'Book 3',
        gender: 'Gender 3',
        author: 'Author 3',
        read: false
    },
    {
        title: 'Book 4',
        gender: 'Gender 4',
        author: 'Author 4',
        read: false
    },
    {
        title: 'Book 5',
        gender: 'Gender 5',
        author: 'Author 5',
        read: false
    },
    {
        title: 'Book 6',
        gender: 'Gender 6',
        author: 'Author 6',
        read: false
    },
    {
        title: 'Book 7',
        gender: 'Gender 7',
        author: 'Author 7',
        read: false
    }
];

var router = function (nav) {
    // Routes
    bookRouter.route('/')
        .get(function (req, res) {
            res.render('books', {
                title: 'Hello from render',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id') // Express will atach whatever is after '/' to the request
        .get(function (req, res) {
            var id = req.params.id;
            res.render('book', {
                title: 'Hello from render',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router; // app.js will execute this function and pass in nav