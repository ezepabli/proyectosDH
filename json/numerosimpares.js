function noPares(numero){
let impares = 0;
    for (let i = 0;i <= numero;i++){
        if(i % 2 == 1){
            impares = impares +1;
          }
         console.log(i)
       }
    console.log(impares)
    }
    noPares(19);