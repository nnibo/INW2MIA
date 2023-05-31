class Acessorio{
    constructor(id, descricao, ativo, estoque, preco, peso, cor){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.peso = peso;
        this.cor = cor;
    }

    ativar(){
        this.ativo = true;
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

    retirarEstoque(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossível retirar do estoque...");
            }  
            else if(valor == 0) {
                console.log("Impossível realizar retirada do estoque enquanto ele está zerado...");
            }
            else if(this.estoque < valor){
                console.log("estoque insuficiente...");
            }
            else{
                this.estoque -= valor;
            }
        }
        else{
            console.log("Produto está inaiva...");
        }
    }
}

const leia = require("prompt-sync")();
let x = "";

console.log("Siever's acessories\n");
console.log("Uma vida fácil e bem decorada!\n");

x = leia("Deseja fazer uma compra? Y/N: ").toUpperCase();

while(x == "Y"){

    console.log("Siever's acessories\n");
    console.log("Uma vida fácil e bem decorada!\n");
    console.log("Cadastro incial de um produto.\n");

    let id = leia("Qual é o id deste produto: ");
    let descricao = leia("Descrição do produto: ");
    let preco = leia("Digite o preço unitário do produto: ")
    let peso = leia("Qual é o peso deste produto: ");
    let cor = leia("Qual é a cor deste produto: ");

    let p1 = new Acessorio(id, descricao, false, 10, preco, peso, cor);

    console.log("Produto cadastrado!\n");
    p1.ativar();

    for(let i=0; i<=5; i++){
        console.log(p1);

        let valor = parseInt(leia("Quantos produtos você deseja comprar: "));
        
        if(valor <= 0){
            valor = leia("Digitação Incorreta. Quantos produtos você deseja comprar:")
        }

        p1.retirarEstoque(valor);
        console.log("Você vai pagar: " + (p1.preco*valor));
    }

    console.log(p1);

    let valor = parseInt(leia("Quantos produtos você deseja incluir no estoque: "));
    p1.incluirEstoque(valor);
    
    console.log(p1);



    x = leia("Deseja fazer uma compra? Y/N: ").toUpperCase();
}
    console.log("Até logo!")

