function anterior(n){
    return n - 1;

};

function triple (n){
    return n * 3;

};

function anteriorDelTriple(n){
    return anterior(triple(n));

};

let dato = true;

function verdaderoOFalso(dato){
    if(dato == true){
        return "es " + dato
    }
}

console.log(verdaderoOFalso(dato));