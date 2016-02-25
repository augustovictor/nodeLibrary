var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var config = {
    user: 'root',
    password: 'root',
    server: 'localhost',
    database: 'node_library',
    options: {
//        encrypt: true // Use this if you're on Windows Azure
    }
};

// Static files (Middlewares)
app.use(express.static('public'));

// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(bodyParser.json());

// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
app.use(bodyParser.urlencoded());

app.set('views', './src/views');

// Navigation menu options
var nav = [
    {
        link: '/books',
        text: 'Books'
    },
    {
        link: '/author',
        text: 'Author'
    }
];

// Routers
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);



app.use('/books', bookRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter);

// Templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', function (req, res) {
    'use strict';

    res.render('index', {
        title: 'Hello from render',
        nav: nav
    });
});

// Port
var port = process.env.PORT || 5000;

app.listen(port, function (err) {
    'use strict';
    if (!err) {
        console.log('Server up and running on port ' + port);
    } else {
        console.log('Error: ' + err);
    }
});