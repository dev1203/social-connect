// Express
const express = require('express');

// Embedded JavaScript
const ejs = require('ejs');

// Executing express
const app = express();

// Database connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'social'
});
connection.connect();

// Defining public directory for assets
app.use(express.static('public'));

// Homepage
app.get('/',function(req,res){
    connection.query("SELECT * FROM posts", function (error, results, fields){
        if(error){
            throw error;
        } 
        console.log(results);
    });
    res.render(__dirname + '/views/index.ejs');
});

// 404 are redirected to homepage.
app.get('*',function(req,res){
    res.redirect('/');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))