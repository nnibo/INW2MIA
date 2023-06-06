const leia = require("prompt-sync")()



let valor1 = 0
let valor2 = 0

valor1 = parseInt(leia("Digite o valor 1"))
valor2 = parseInt(leia("digite o valor 2"))
let nome = leia("Digite seu nome")


console.log(valor1 + valor2)
console.log(nome)
console.log("Oi "+nome.toUpperCase()+ " o valor 1 é "+valor1)
console.log("a soma dos dois vaores é "+(valor1+valor2))
console.log(nome.length)