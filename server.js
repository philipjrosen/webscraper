var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.use(express.static(__dirname + ''));

app.get('/events', function (req, res) {
  var url = 'http://events.stanford.edu/2014/October/1/';

  request(url, function (error, response, html) {
    if (error) {
      console.log("error:", error);
    }
    console.log(html);
  });
});


var port = '3000';

app.listen(port, function() {
  console.log('Listening on port', port, '...');
});