
const input = require("readline-sync")

let a = input.questionInt("number:-")
let b = input.questionInt("number:-")
let c = Math.floor(a/b);
let d = a % b;
console.log(c,d);