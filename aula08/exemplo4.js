class aviao{
    constructor(velocidade, velocidadeMax, marca, qtdPassageiro, peso, ligado){
        this.velocidade = velocidade;
        this.velocidadeMax = velocidadeMax;
        this.marca = marca;
        this.qtdPassageiro = qtdPassageiro;
        this.peso = peso;
        this.ligado = ligado
    }


ligar(){
    console.log("ligando...")
    this.ligado = true
}

}

//programa principal

let aviaoED = new aviao(0,800,"gol",500,250,false)
let aviaoTurma = new aviao( 0,800,"tam",600,300,false)

aviaoED.ligar()
console.log(aviaoED)