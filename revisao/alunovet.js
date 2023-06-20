const leia = require("prompt-sync")();

let alunos = ["", "", "", ""];
let notas = [0, 0, 0, 0];
let situacao = "";
let matricula = ["MAT01", "MAT02", "MAT03"]

for(let i=0; i<alunos.length; i++){
    alunos[i] = leia("Digite o nome do aluno(a): ");
    notas[i] = parseInt(leia("Agora, digite a nota do aluno(a): "));
}

console.log("Boletim");
console.log("NOME \t NOTA \t SITUAÇÃO");

for(let i=0; i<alunos.length; i++){
    if(notas[i]<5){
        situacao = "RECUPERAÇÃO"
    }
    else{
        situacao = "APROVADO"
    }
    console.log(alunos[i] + "\t" + notas[i] + "\t" + situacao)
}

console.log("mudando a nota do aluno");
let auxMat = leia("Digite a matrícula do aluno");

for(let i=0; i<alunos.length; i++){
    if(auxMat == matricula[i]){
        console.log("Aluno escolhido : " + alunos[i])
        notas[i] = parseInt(leia("Digite a nova nota do aluno : "))
    }
}

console.log("MAT\tAluno\tNOTA")

for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao = "Aprovado"
    }
    else{
        situacao = "Rec"
    }
    console.log(matricula[i] + "\t" + alunos[i] + "\t" + notas[i] + "\t" + situacao);
}