var express=require('express');

var app=express();

app.get('/year/:age',function(req,res){
   var aage=req.params.age;
   var year=2021-aage;
   res.send("You were born in"+year);
});


app.listen(3000);
console.log("Hello port is enabled");