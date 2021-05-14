var fs=require('fs');
var arguments=process.argv[2];

fs.readFile(arguments,'utf8',function(err,contentFile){
    if(err){
        console.log(err);
    }
    var number=contentFile.split('').map(function(num){
        return parseInt(num);
    });
    var sum=number.reduce(function(acc,currentnumber){
        return acc+currentnumber;
    });
    console.log('the sum is=:'+sum);
});