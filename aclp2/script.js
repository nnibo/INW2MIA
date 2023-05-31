class VinhosBebidas {
    constructor (id, descricao, ativo, estoque, preco, marca, cor) {
        this.id = id,
        this.descricao = descricao,
        this.ativo = ativo,
        this.estoque = estoque,
        this.preco = preco,
        this.marca = marca,
        this.cor = cor
    }
    
   ativar(){
        this.ativo = true
    }

    incluirEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível realizar a inclusão do estoque...");
            }
            else if(valor == 0){
                console.log("Ipossível realizar a inclusão do estoque enquanto ele está zerado...");
            }
            else{
                this.estoque += valor;
            }
        }
        else{
            console.log("produto está inativo...");
        }
    }

      retirarEstoque(valor) {
        if (this.ativo) {
          if (valor < 0) {
            console.log("Impossível realizar valor negativo...");
          } else if (valor == 0) {
            console.log("Impossível realizar valor zerado...");
          } else if (this.estoque < valor) {
            console.log("Saldo insuficiente...");
          } else {
            this.estoque -= valor;
          }
        } else {
          console.log("Conta está inativa...");
        }
      }

}

const leia = require("prompt-sync")();

let valor = 0
let fazerCompra = leia("Deseja fazer a compra? (S/N)").toUpperCase();
while(fazerCompra == "S"){
    let id = leia("Qual o id do produto?")
    let descricao = leia("qual a descricao do produto?")
   
    let preco = leia("qual o preco do seu produto")
    let marca = leia("qual a marca do seu produto")
    let cor = leia("qual a cor do seu produto?")
   
    


let pdt1 = new VinhosBebidas(id, descricao, false, 10, preco, marca, cor )

pdt1.ativar()
for (let x = 1; x <= 5; x++) {
    console.log(pdt1)
   let valor = parseInt(leia("qual a quantidade de produtos que deseja?"))
    pdt1.retirarEstoque(valor)
    
    console.log("preço a pagar: "+(valor*pdt1.preco))
}
console.log(pdt1)

let valor = parseInt(leia("qual a quantidade de produtos que deseja incluir?"))
    console.log(pdt1);
    pdt1.incluirEstoque(valor)
    console.log(pdt1);

let fazerCompra = leia("Deseja fazer a compra? (S/N)").toUpperCase();
}

