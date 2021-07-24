let estudiantes = [
    {
        nombre: "Juan",
        promedio: 7.5,
        curso: '1A'
    },
    {
        nombre: "Albertito",
        promedio: 6.7,
        curso: '1B'
    },
    {
        nombre: "Alexis",
        promedio: 6.9,
        curso: '1B'
    }
];
console.log(estudiantes);

let alumnoEgresado = estudiantes.pop();

console.log(estudiantes);
console.log(alumnoEgresado);