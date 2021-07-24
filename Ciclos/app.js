const fs = require("fs");
const nombre = "ciclos.json";

fs.readFile(nombre,'utf8', (error, datos) => {
    if (error) throw error;

    let tareas = JSON.parse( datos );

    for(let i = 0; i < tareas.length; i++)
    {
        if(tareas[i].estado == "PENDIENTE")
        {
            console.log(tareas[i].titulo);
            console.log(tareas[i].estado);
        }        
    }   
}
);