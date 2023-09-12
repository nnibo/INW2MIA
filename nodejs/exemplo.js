//Criando a função da promisse

function falarDepoisDe(segundos, frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

//Chamando a função
falarDepoisDe(3,'Oi turma 2mia')
.then(frase => frase.concat(" texto da prmisse "))
.then(novaFrase => console.log(novaFrase))

//vscode trabalha em milisegundos
