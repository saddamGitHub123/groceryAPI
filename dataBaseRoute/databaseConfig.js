var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

//connect to mongoose

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;