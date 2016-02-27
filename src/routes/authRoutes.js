var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var router = function () {
    'use strict';
    authRouter.route('/signup')
        .post(function (req, res) {

            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users'); // If we do not have a collection called 'users' mongodb will created
                var user = {
                    username: req.body.username, // The names html form inputs
                    password: req.body.password
                };
                collection.insert(user, function (err, result) {
                    req.login(result.ops[0], function () {
                        res.redirect('/auth/profile');
                    });

                });
            });

        });

    authRouter.route('/signin')
        .post(passport.authenticate('local', { // The name of the strategy: local.strategy.js
                failureRedirect: '/',
            }),
            function (req, res) {
                res.redirect('/auth/profile');
            });

    authRouter.route('/profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.json(req.user);
        });

    return authRouter;
};

module.exports = router;