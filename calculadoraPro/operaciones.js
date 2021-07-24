function sumar (a,b){

    return a + b;

};
function restar (a,b){

    return resta = a - b;

};
function multiplicar (a,b){

    return multiplicacion = a * b;

};
function dividir (a,b){

    if(b == 0){

        return 'No se puede dividir por cero';
    }
    else{
        
        return division = a / b;
    }

};

module.exports = {sumar,restar,dividir,multiplicar};