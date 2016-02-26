var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
    passport.use(new LocalStrategy({
            usernameField: 'username', // The names of the login form inputs
            passwordField: 'password'
        },
        function (username, password, done) {
            // Credentials validation
            var user = {
                username: username,
                password: password
            };
            done(null, user);
        }
    ));
}