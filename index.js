const express = require('express')
const ejs = require('ejs')
const app = express()
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render(__dirname + '/views/index.ejs');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))