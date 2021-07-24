let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];


let aprobados2 = estudiantes.filter((callback) => callback.aprobado == true);

console.log(aprobados2);
