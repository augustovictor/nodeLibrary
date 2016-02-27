var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;


var bookController = function (bookService, nav) {
    'use strict';
    
    var middleware = function (req, res, next) {
//        if (!req.user) { // If not logged in
//            res.redirect('/');
//        }
        next();
    };
    
    var getList = function (req, res) {
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
    };

    var getById = function (req, res) {
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

    };

    return {
        getList: getList,
        getById: getById,
        middleware: middleware
    };
};

module.exports = bookController;