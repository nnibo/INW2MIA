function escreverNoConsole(){
    console.log("Primeiro exemplo - função normal");
}

escreverNoConsole();

//variacao de funcao normal ou declarada
const escreveNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variacao do modo normal")
}

escreveNoConsoleVariacao();

//arrow function função seta ou flecha
//toda arrow function usar os caracters = junto com >
const escreveComArrow = ()=>{
    console.log("Terceiro exemplo - Arrow Function")
}

escreveComArrow();

//arrow function => com parametro
const escreverCOmArrowParametro = (texto) =>{
    console.log(texto);
} // se tiver apenas um parametro pode ser omitido as chaves {}


escreverCOmArrowParametro("Quarto exemplo - Arrow function com parametro")
escreverCOmArrowParametro("outro texto");

//funcao arrow que somar dois valores
const somarDois = (numero1, numero2)=>{
    console.log("A soma é " +(numero1 + numero2))
}

//executando 
console.log("------------------------")
somarDois(10,10)


//variacao arrow function sem parentese e sem chave
const varianteArrow = texto => console.log(texto)

varianteArrow("Quinto exemplo")

//crie uma arrow function chamada parImpar que recebe
//um parametro numerico e informar na saida este numero
//e mais um texto conforme a situação
//[numero], este valor é negativo
//[numero], este valor é neutro 0
//[numero], este valor é par
//[numero], este valor é impar


const parImpar = (numero1)=>{

     if(numero1 < 0){
        console.log("O numero é negativo")
    }

     else if(numero1 == 0){
        console.log("O numero é neutro")
    }
    
    else if((numero1 %2)==0){
        console.log("o numero é par")
    }
    else if((numero1 %2)== 1){
        console.log("O numero é impar")
    }
    
}
console.log("---------------------")
parImpar(0)