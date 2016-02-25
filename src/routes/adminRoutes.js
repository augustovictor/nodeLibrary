var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

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

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });

//            res.send('Inserting books...');
        });

    return adminRouter;
}

module.exports = router;