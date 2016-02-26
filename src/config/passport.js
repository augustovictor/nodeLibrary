var passport = require('passport');

module.exports = function (app) {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user); // This last parameter is the key which the user would use to log in the app
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
    
    require('./strategies/local.strategy')();
};