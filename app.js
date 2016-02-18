var express = require('express');

var app = express();


// Static files
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

// Routes
app.get('/', function (req, res) {
    'use strict';

    res.render('index', {
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