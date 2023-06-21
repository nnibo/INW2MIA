const leia = require("prompt-sync")()

let nome
let nota

genero = leia("qual o seu genero?")
nome = leia("Qual o seu nome?")
nota = leia("Quanto voce tirou?")
if(nota <=5){
console.log("Oi aluno"+nome+"voce ficou de rec")
} else{
    console.log("Voce passou")
}
