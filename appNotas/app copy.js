const fs = require("fs");
const data = fs.readFileSync("tareas.json");

const tareas = JSON.parse(data);

const element = tareas[1]

console.log(element.titulo);

// const tareas2 = JSON.stringify(tareas);
//console.log(tareas2);
