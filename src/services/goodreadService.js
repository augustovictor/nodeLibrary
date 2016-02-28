var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({
    explicitArray: false
});

var goodreadService = function () {
    'use strict';

    var getBookById = function (id, cb) {

        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=Gy1rddKv6zIVxpLLuZblA'
        };

        var callback = function (res) {
            var str = '';
            res.on('data', function (chunk) {
                // When data comes back
                str += chunk;
            });

            res.on('end', function () {
                // When the function ends
//                console.log(str);
                parser.parseString(str,
                    function (err, result) {
                        cb(null, result.GoodreadsResponse.book);

                    });
            });
        };

        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };

};

module.exports = goodreadService;