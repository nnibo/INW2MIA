const parImpar = (numero1)=>{

    if(numero1 < 0){
       return 'negativo'
   }

    else if(numero1 == 0){
       return 'neutro'
   }
   
   else if((numero1 %2)==0){
       return 'par'
   }
   else if((numero1 %2)== 1){
       return 'impar'
   }
   
}
console.log("---------------------")


console.log("O numero é "+parImpar(0))
console.log("O numero é "+parImpar(-2))
console.log("o numero é "+parImpar(1))
console.log("o numero é "+parImpar(2))