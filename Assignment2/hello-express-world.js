var express=require('express');
var PORT=process.env.PORT || 8080;
var app=express();

app.get('/',function(req,res){
    res.send('Hello World!!');
});

var datee=(new Date()).toJSON();
app.get('/time',function(req,res){
    res.send('Current Date is  '+datee);
});

app.listen(PORT,() =>{
    console.log(`listing on port ${PORT}`);
});
