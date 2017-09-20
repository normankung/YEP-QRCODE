var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var ticketCheck = require('./checkTicket');
var config = require('./config')
let port = config.port

var app = express();
app.use(bodyParser());
app.use(ticketCheck)
app.use(express.static('public'));
app.listen(port);
