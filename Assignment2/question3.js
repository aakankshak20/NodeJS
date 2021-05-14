var express=require('express');
var arguments=process.argv;

var app=express();


app.get('/home',function(req,res){
    res.sendFile(__dirname+'/home.html');
});

app.listen(arguments[2]);
console.log("listing from port "+arguments[2]);