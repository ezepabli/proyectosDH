let array = ["www.tuvieja.com.ar","www.tuhermana.com","www.tutia.com.ar"];

function agregarHttp(url) {
    return "http://" + url;
};

// console.log(agregarHttp(array[1]));


function procesar(array,callback){
    let resultado = [];
    for (let i = 0;i < array.length;i++){
        resultado.push(callback(array[i]))
    };
    // escribí tu código aquí
    // recuerda iterar en cada uno de los elementos del array. Eso lo podes hacer utilizando...
    return resultado;
};
procesar(array,agregarHttp);
console.log(procesar(array,agregarHttp)[0]);