var fs=require('fs');
var arguments=process.argv;
fs.writeFileSync('writetxt.txt',arguments[2]);
console.log("The file was saved");