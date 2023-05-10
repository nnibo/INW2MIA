class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }
    
    fazerBarulho(){
        console.log("Fazendo barulho...")
    }


    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}
class Gato extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca
        this.cor = cor
    }

    miar(){
        console.log("Miauuuuuuu........")
    }
}

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        super(tipo)
        this.raca = raca
        this.cor = cor
    }

    latir(){
        console.log("AUAUAU*AUAUAUAUAUAUUAUAU")
    }
}
//PROGRAMA PRINCIPAL 

let bicho1 = new Animal("mamifero","medio",false,2020)
console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()

let gato1 = new Gato("felino","sphinx","laranja")
console.log(gato1);
console.log(gato1.cor);
gato1.miar()

let cachorro1 = new Cachorro("Canino","Bulldog","branco")
console.log(cachorro1)
console.log(cachorro1.cor)
cachorro1.latir()
cachorro1.nascimento = 2018
console.log("A idade do cachorro é "+cachorro1.retornarIdade(2023));