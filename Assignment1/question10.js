var fs=require('fs');
var arguments=process.argv;
fs.writeFile(arguments[2],arguments[3],function(err){
    if(err){
       return  console.log(err);
    }
});
fs.readFile(arguments[2],'utf8',function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
});
console.log("The file was saved");