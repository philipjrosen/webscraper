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
    var $contents;
    var eventLocation;
    var events = $events.map(function (idx, item) {
      //get all the children of 'p' in order to get the location(a text node)
      $contents = $(this).find('p').contents();
      eventLocation = $contents[$contents.length -1].nodeValue
      return {
        description: $(this).find('h3').text(),
        time: $(this).find('strong').text(),
        location: eventLocation
      };
    }).get();

    console.log(events);
  });
});


var port = '3000';

app.listen(port, function() {
  console.log('Listening on port', port, '...');
});