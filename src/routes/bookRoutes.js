var express = require('express');

var bookRouter = express.Router();

var mongodb = require('mongodb').MongoClient;


var router = function (nav) {
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