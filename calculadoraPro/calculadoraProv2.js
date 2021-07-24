let operacion = (process.argv[3])
let parametrosCalculadora1 = Number(process.argv[2]);
let parametrosCalculadora2 = Number(process.argv[4]);

let operaciones = require('./operaciones');

switch (operacion) {

    case '+':
        
        console.log(operaciones.sumar(parametrosCalculadora1,parametrosCalculadora2));
        break;

    case '-':
        
        console.log(operaciones.restar(parametrosCalculadora1,parametrosCalculadora2));
        break;

    case ":":
        
        console.log(operaciones.dividir(parametrosCalculadora1,parametrosCalculadora2));
        break;

    case '*':
        
        console.log(operaciones.multiplicar(parametrosCalculadora1,parametrosCalculadora2));
        break;

    default:
        console.log('No conozco esa operación');
}