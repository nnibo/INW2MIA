//escreva na tela numeros de 1 a 100
//so mostra os impares
//multiplos de 3
//mostra ao final a soma destes numeros
let total = 0
for(let x=1; x<=100; x++){
    
    if((x%2)==1){
        if((x%3)==0){
            console.log(x)
            total += x
        }
}


}
console.log("total = "+total)