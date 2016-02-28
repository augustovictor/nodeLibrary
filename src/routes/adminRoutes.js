var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

// BOOKS
var books = [
    {
        title: 'War and Peace',
        gender: 'Gender 1',
        author: 'Author 1',
        bookId: 656,
        read: false
    },
    {
        title: 'Les Miserables',
        gender: 'Gender 2',
        author: 'Author 2',
        bookId: 24280,
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

var router = function(nav) {
    
    adminRouter.route('/addBooks')
        .get(function(req, res) {
            url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function(err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });

	return adminRouter;
};

module.exports = router;