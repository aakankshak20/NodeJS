var fs=require('fs')

var readfile=fs.readFileSync('test.txt','utf8');
console.log(readfile);