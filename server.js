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
    var $ = cheerio.load(html);

    var $events = $('.postcard-text');

    var events = $events.map(function (idx, item) {
      return { description: $(this).find('h3').text() };
    }).get();

    console.log(events);
  });
});


var port = '3000';

app.listen(port, function() {
  console.log('Listening on port', port, '...');
});