
var fs=require('fs');


var file="test.txt";
var wordfind="hello";

fs.readFile(file,'utf8',function(err,content){
    if(err){
        console.log(err);
    }
    var wordtext=content.toLowerCase().split(' ');
    var fileword=wordtext.filter(function(word){
        return word.includes(wordfind);
    })
    console.log("the word  "+wordfind+"  appears "+fileword.length+" times in file(text)");
})

