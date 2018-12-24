// Express
const express = require('express');

// Embedded JavaScript
const ejs = require('ejs');

// Executing express
const app = express();
// Fetch config files.
const config = require('./config/database.json');
var mysql      = require('mysql');

// Database connection
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});
connection.connect();

// Defining public directory for assets
app.use(express.static('public'));

/**
 * Body Parse 
*/
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// 
var PostModel = require('./controllers/PostController');

// Homepage
app.get('/',function(req,res){
    res.render(__dirname + '/views/index.ejs');
});

app.get('/login',function(req,res){
    res.render(__dirname + '/views/login.ejs');
});

app.get('/signup',function(req,res){
    res.render(__dirname + '/views/signup.ejs');
});

app.post('/verifyusername', function(req,res){
    if(req.body.ajax){
        let username = req.body.inputValue;
        let userQuery = "SELECT * FROM users WHERE username=" + mysql.escape(username)+ ";";
        connection.query(userQuery, function (error, results, fields){
            if(error){
                throw error;
            }
            results[0] ? res.send(false) : res.send(true);
            return results;
        });
    }
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

app.listen(3000, process.env.IP, () =>{
    console.log(`Example app listening on port 3000`);
}); 