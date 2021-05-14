var express=require('express');
var bodyParser=require('body-parser');

var app=express();
var path=require('path');
var urlencodedParser=bodyParser.urlencoded({extended:false});
app.use(urlencodedParser);
// app.set('view engine','ejs');



// //
app.post('/contact',(req,res)=>{
    var name=req.body.user.split('').reverse().join('');
    res.send('the username is :::'+name);
    // res.render('form',{val:req.body.str.split('').reverse().join('')})
});

app.get('/',(req,res)=>{
         res.sendFile('question5.html',{root:path.join(__dirname,'')});
     })

app.listen(3000);