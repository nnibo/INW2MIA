const leia = require("prompt-sync")()
let x1
let y1
let x2
let y2
let D

x1 = parseInt(leia("Digite o x1 : "))
y1 = parseInt(leia("Digite o y1 : "))
x2 = parseInt(leia("Digite o x2 : "))
y1 = parseInt(leia("Digite o y2 : "))

D = Math.sqrt(Math.pow((x2 - x1),2) + (Math.pow((y2 - y1),2)))

console.log(D)