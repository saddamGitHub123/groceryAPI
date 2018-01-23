var express = require('express');

var router = express.Router();
const mysql = require('mysql');


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

router.get('/createdb', (req, res) => {

    let sql = 'CREATE DATABASE nodemysql';
    mysqlDb.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created ....');
    });
});