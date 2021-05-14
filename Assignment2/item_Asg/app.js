var express = require('express')
var app = express();


var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./item.model');
var db='mongodb://localhost/example';

mongoose.connect(db);

app.use(express.json());




app.listen(8080,() =>{
    console.log('app listening on port 8080')
});