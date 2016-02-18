var express = require('express');

var app = express();


// Static files
app.use(express.static('public'));
app.set('views', './src/views');

// Templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', function (req, res) {
    'use strict';

    res.render('index', {
        title: 'Hello from render',
        list: ['a', 'b']
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