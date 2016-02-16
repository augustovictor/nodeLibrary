var express = require('express');

var app = express();


// Static files
app.use(express.static('public'));
app.use(express.static('src/views'));

// Routes
app.get('/', function(req, res) {
    res.send('Hello world!');
});
app.get('/books', function(req, res) {
    res.send('Hello books!');
});

// Port

var port = 5000;
app.listen(port, function(err) {
    if(!err) {
        console.log("Server up and running on port " + port);
    }
    else {
        console.log("Error: " + err);
    }
});
