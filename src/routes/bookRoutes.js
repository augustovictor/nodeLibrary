var express = require('express');

var bookRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var ObjectId = require('mongodb').ObjectID;

var router = function (nav) {
    'use strict';
    // Routes
    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.find({}).toArray(function (err, resultSet) {
                    if (!err) {
                        res.render('books', {
                            title: 'Books',
                            nav: nav,
                            books: resultSet
                        });
                    } else {
                        res.send('An error occurred!' + err);
                    }
                });
            });
        });

    bookRouter.route('/:id') // Express will atach whatever is after '/' to the request
        .get(function (req, res) {
            var id = new ObjectId(req.params.id);

            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');

                collection.findOne({
                    _id: id
                }, function (err, resultSet) {
                    if (!err) {

                        res.render('book', {
                            title: 'Book',
                            nav: nav,
                            book: resultSet
                        });
                    } else {
                        res.send('An error occurred: ' + err);
                    }
                });
            });

        });

    return bookRouter;
};

module.exports = router; // app.js will execute this function and pass in nav