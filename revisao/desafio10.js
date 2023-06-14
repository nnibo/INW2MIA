//fazer um programa que receba a digitação de numeros do usuario
//ate que o usuario digite um numero negativo
//ao final mostra
// a soma dos numeros
// a qtde de numeros lidos
// o maior numero digitado

const leia = require("prompt-sync")()
let numero = 0
let total = 0
while(numero>=0){
    total += numero
    if(numero>maior){
        maior = numero
    }
    contador++
    numero = parseInt(leia("digite um numero"))
}
console.log("total é "+total)
console.log("Maior numero: "+maior)
console.log("quantidade : "+contador)
console.log("Fim de programa!!!")