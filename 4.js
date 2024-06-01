const input = require("readline-sync")

let a = input.questionInt("number:-")
let b = input.questionInt("number:-")
let sum = (a+b);
let B = (sum-b);
let A = (sum-a);
console.log(A,B);