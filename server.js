var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.use(express.static(__dirname + ''));

var port = '3000';

app.listen(port, function() {
  console.log('Listening on port', port, '...');
});