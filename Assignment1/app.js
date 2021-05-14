var sum=require('./operations/sum');
var substraction=require('./operations/substraction');
var  multiplication=require('./operations/multiplication');
var division=require('./operations/division');
var moment=require('moment');


var x=3;
var y=7;

console.log("Today is :"+moment().format("dddd,MMMM Do YYYY,h:mm:ss a"));
// console.log(sum(3,7));
// division(x,y);
console.log(multiplication(3,4));
// substraction(x,y);