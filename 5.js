const input = require("readline-sync")

let  a = input.questionInt("number:-");
let b = input.questionInt("number:-");
let c = a + b ;
let d = a-b;
let e = a*b;
let f = a/b;
let g = Math.floor(a/b);
let h = a%b;
console.log(c,d,e,f,g,h);