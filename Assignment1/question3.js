var fs=require('fs');
var path = require('path');

var p='./';

fs.readdir(p,function(err,files){
    if(err){
        console.log(err);
    }
    files.forEach(function(file){
        if(fs.statSync(file).isDirectory())
        console.log("DIR: "+file);
        else console.log("FILE: "+file);
    });
});