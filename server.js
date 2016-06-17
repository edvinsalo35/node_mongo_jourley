var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes');

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/restdb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 8080;

app.use('/', routes);

app.listen(port);