const leia = require("prompt-sync")()

let codigos = ["COD001","COD002","COD003","COD004","COD005"]
let produto = ["TECLADO","MOUSE","MONITOR","CADEIRA","CPU GAME"]
let valor = [20,10,150,700,800]
let estoque = [0,0,0,0,0]
let vendas = [0,0,0,0,0]

console.log("COD\tPRODUTO\tVALOR\tESTOQUE")

for(let i=0; i<codigos.length; i++ ){
    console.log(codigos[i]+'\t\t'+produto[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}

console.log("Cadastramento de estoque")
for(let i = 0; i<codigos.length; i++){
    console.log(codigos[i]+produto[i])
    estoque[i] = parseInt(leia("Digite o valor do estoque : "))
}

console.log("COD\tPRODUTO\tVALOR\tESTOQUE")

for(let i=0; i<codigos.length; i++ ){
    console.log(codigos[i]+'\t\t'+produto[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}

console.log("PROCESSO DE VENDA")
let auxCod = leia("Digite o codigo do produto que deseja compra : ").toLocaleUpperCase
for(let i = 0; i<codigos.length; i++){
    if(auxCod == codigos[i]){
        console.log(codigos[i]+' - '+produto[i]+'estoque : '+estoque[i])
        vendas[i] = parseInt(leia("Digite a quantidade que deseja compra : "))
        console.log("Tutal da compra : "+(vendas[i]*valor[i]))
        estoque[i] = estoque[i]-vendas[i]
    }
}

console.log("COD\tPRODUTO\tVALOR\tESTOQUE")
for(let i = 0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produto[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
