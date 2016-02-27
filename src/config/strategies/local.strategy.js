var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient;

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: 'username', // The names of the login form inputs
            passwordField: 'password'
        },
        function (username, password, done) {
            // Credentials validation
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('users');
                collection.findOne({
                        username: username
                    },
                    function (err, result) {
                        if (result.password === password) {
                            var user = result;
                            done(null, user);
                        } else {
                            done(null, false);
                        }
                    }
                )
            });
        }
    ));
}