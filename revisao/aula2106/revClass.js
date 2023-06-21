class Pessoa{
    constructor(){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }

    mostrarIdade(){
        console.log("Idade"+(2023-this.anoNascimento))
    }
    
}

//programa principal
const leia = require("prompt-sync")();

let p1 = new Pessoa("000.111.222-33","Marcos",2006)