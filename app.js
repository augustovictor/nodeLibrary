var express = require('express');

var app = express();

var books = [
    {
        title: "Book 1",
        gender: "Gender 1",
        author: "Author 1",
        read: false
    },
    {
        title: "Book 2",
        gender: "Gender 2",
        author: "Author 2",
        read: false
    },
    {
        title: "Book 3",
        gender: "Gender 3",
        author: "Author 3",
        read: false
    },
    {
        title: "Book 4",
        gender: "Gender 4",
        author: "Author 4",
        read: false
    },
    {
        title: "Book 5",
        gender: "Gender 5",
        author: "Author 5",
        read: false
    },
    {
        title: "Book 6",
        gender: "Gender 6",
        author: "Author 6",
        read: false
    },
    {
        title: "Book 7",
        gender: "Gender 7",
        author: "Author 7",
        read: false
    }
];

// Static files
app.use(express.static('public'));
app.set('views', './src/views');

// Router
var bookRouter = require('./src/routes/bookRoutes');



app.use('/books', bookRouter);

// Templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', function (req, res) {
    'use strict';

    res.render('index', {
        title: 'Hello from render',
        nav: [
            {
                link: '/books',
                text: 'Books'
            },
            {
                link: '/authors',
                text: 'Authors'
            }
        ]
    });
});

app.get('/books', function (req, res) {
    'use strict';
    res.send('Hello books!');
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