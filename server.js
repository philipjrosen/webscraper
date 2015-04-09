var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var u       = require('underscore');
var app = express();

app.use(express.static(__dirname + ''));

app.get('/events', function (req, res) {
var eventUrl = req.query.eventUrl;

  var options = {
    url: eventUrl,
    headers: {
    'User-Agent': 'request'
    }
  };

  request(options, function (error, response, html) {
    if (error) {
      console.log("error:", error);
    }
    var $ = cheerio.load(html);
    var events = scrapers.eventbrite($);
    // var events = scrapers.stanford($);

    res.send(events);
  });
});

var scrapers = {
  stanford: stanfordScraper,
  eventbrite: eventbriteScraper
};

function stanfordScraper($) {
  var $events = $('.postcard-text');
  var $contents;
  var eventLocation;
  return $events.map(function (idx, item) {
    //get all the children of 'p' in order to get the location(a text node)
    $contents = $(this).find('p').contents();
    eventLocation = $contents[$contents.length -1].nodeValue
    return {
      description: $(this).find('h3').text(),
      time: $(this).find('strong').text(),
      location: eventLocation
    };
  }).get();
};

function eventbriteScraper($) {
  var $descriptons = $('.event-poster__title');
  var descriptions = $descriptons.map(function (idx, item) {
    return { description: $(this).text()};
  }).get();

  var $locations = $('[itemprop="location"]');
  var $contents;
  var eventLocation;
  var locations = $locations.map(function (idx, item) {
    $contents = $(this).contents();
    eventLocation = $contents[$contents.length -1].nodeValue
    return { location: eventLocation};
  }).get();

  var $dates = $('.event-poster__date');
  var day, time;
  var dates = $dates.map(function (idx, item) {
    time = $(this).first().children().first().text();
    day = $(this).first().children().eq(1).text();
    return { time: time + " " + day };
  }).get();

  var events = [];

  for (var i = 0; i <= locations.length; i++) {
    events.push(u.extend(locations[i], descriptions[i], dates[i]));
  };
  return events;
};

var port = '3000';

app.listen(port, function() {
  console.log('Listening on port', port, '...');
});