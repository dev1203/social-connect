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

// 
var PostModel = require('./controllers/PostController.js');

// Homepage
app.get('/',function(req,res){
    res.render(__dirname + '/views/index.ejs');
});


app.get('/getAllPosts',function(req,res){
    let posts = new PostModel();
    posts.getPosts((connection), function(response){
        res.send(response);
    });
});

// 404 are redirected to homepage.
app.get('*',function(req,res){
    res.redirect('/');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))