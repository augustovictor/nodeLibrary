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

// Routes
bookRouter.route('/')
    .get(function (req, res) {
        res.render('books', {
            title: 'Hello from render',
            nav: [
                {
                    link: '/books',
                    text: 'Books'
                },
                {
                    link: '/authors',
                    text: 'Authors'
                }
            ],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello single book');
    });

module.exports = bookRouter;