var express = require('express');

var app = express();



// Static files
app.use(express.static('public'));
app.set('views', './src/views');

// Navigation menu options
var nav = [
    {
        link: '/book',
        text: 'Book'
    },
    {
        link: '/author',
        text: 'Author'
    }
];

// Router
var bookRouter = require('./src/routes/bookRoutes')(nav);



app.use('/books', bookRouter);

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