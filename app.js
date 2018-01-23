var express = require('express');

var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const mysql = require('mysql');

app.use(bodyParser.json());

//include the file
//this is usign for testing class
Genre = require('./models/genre');

Book = require('./models/book');

//configure app

//use middleware


//define routes

//for testing api
app.use('/api/test',require('./testRouter/test'));







//create connection  mysql

const mysqlDb = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
   // database : 'nodemysql'
    
});

//connect
mysqlDb.connect((err) =>{
    if(err){
        throw err;
    }
    console.log("Mysql connected");
});

//Create database

app.get('/createdb', (req, res) => {

    let sql = 'CREATE DATABASE nodemysql';
    mysqlDb.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created ....');
    });
});


//connect to mongoose

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


//this is root api for testing
app.get('/',function(req,res){
    debugger;
    res.send('PLEASE USE /api/books');
});



//Server running

app.listen(3000,function(){

    console.log("Running on port 3000");
});

//var http = require('http');
/*http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello World');

}).listen(1337,'127.0.0.1');
console.log("Server is running");*/