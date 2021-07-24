var operacion = (process.argv[3])
var parametrosCalculadora1 = Number(process.argv[2]);
var parametrosCalculadora2 = Number(process.argv[4]);

let sumatoria = require('./sumar');
let resta = require('./restar');
let multiplicacion = require('./dividir');
let division = require('./dividir');

switch (operacion) {

    case '+':
        
        console.log(sumatoria(parametrosCalculadora1,parametrosCalculadora2));
        break;

    case '-':
        
        console.log(resta(parametrosCalculadora1,parametrosCalculadora2));
        break;

    case ":":
        
        console.log(division(parametrosCalculadora1,parametrosCalculadora2));
        break;

    case '*':
        
        console.log(multiplicacion(parametrosCalculadora1,parametrosCalculadora2));
        break;

    default:
        console.log('No conozco esa operación');
}