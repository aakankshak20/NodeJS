var express=require('express');
var fs=require('fs');

var app=express();

app.get('/books',function(req,res){
    var file=process.argv[3]
    fs.readFile(file,function(err,data){
        if(err){
            console.log(err);
        }
        books=JSON.parse(data);
        res.json(books);
    })
});

app.listen(process.argv[2]);
console.log('listen');