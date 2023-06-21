const leia = require("prompt-sync")();

let A 
let B 
let C

A = parseInt(leia("digite seu numero : "))
B = parseInt(leia("digite seu numero : "))
C = parseInt(leia("digite seu numero : "))

let R 
let S
let sumAB
let sumBC
let D
let sumRS
sumAB = A + B
sumBC = B + C

R = Math.pow(sumAB,2)
S = Math.pow(sumBC,2)
sumRS = R + S
D = RS/2
console.log(D)