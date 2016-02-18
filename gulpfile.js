// Definitions
var gulp = require('gulp');

var jsHint = require('gulp-jshint');

var jsCs = require('gulp-jscs');

var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

// Validate style
gulp.task('style', function () {
    'use strict';

    gulp.src(jsFiles)
        .pipe(jsHint())
        .pipe(jsHint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jsCs());
});

// Inject bower dependencies
// 'inject' will be called as a gulp task in terminal
gulp.task('inject', function () {
    'use strict';

    var wiredep = require('wiredep').stream;

    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css', 'public/js/*.js'], {
        read: false
    });

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

// It will also run style and inject
gulp.task('serve', ['style', 'inject'], function () {
    'use strict';

    // Everything nodemon needs in order to run
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles // What files nodemon will look for. Then restart server when they change.
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting...');
        });
});