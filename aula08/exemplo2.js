class retangulo{
     constructor(base,altura){
     this.base=base;
     this.altura=altura
     }

     mostrararea(){
    console.log('A area e '+this.altura * this.base)
     }
    }
    
    let objeto1= new retangulo(5,3)
    let objeto2= new retangulo(4,2)
    
    console.log('AREA DO RETANGULO')
    console.log('Retangulo 1')
    objeto1.mostrararea()
    
    console.log('Retangulo 2')
    objeto2.mostrararea()