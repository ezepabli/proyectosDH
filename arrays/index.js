let notas = [3,5,8,10,9,7,8,8];

let posicionDelOcho = notas.indexOf(8);

let ultimaPosicionDelOcho = notas.lastIndexOf(8);

console.log(posicionDelOcho);
console.log(ultimaPosicionDelOcho);

let resultadoTodoJunto = notas.join('-');
console.log(resultadoTodoJunto);

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]


let indiceJuan = alumnos.indexOf("Juan");

let indiceFrancisco = alumnos.indexOf("Francisco");

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
  let alumnoEgresado = estudiantes.pop();