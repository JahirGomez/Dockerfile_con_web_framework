const express = require ("express");

class Estudiante {
    constructor (matricula, nombre){
        this.matricula = matricula;
        this.nombre = nombre;
    }
}

let Estudiantes = [];

const estudiante1 = new Estudiante (17000919, "Horacio");
Estudiantes.push(estudiante1);
const estudiante2 = new Estudiante (17000918, "Jahir");
Estudiantes.push(estudiante2);
const estudiante3 = new Estudiante (17000917, "Juany");
Estudiantes.push(estudiante3);
const estudiante4 = new Estudiante (17000916, "Fernando");
Estudiantes.push(estudiante4);

const main = express();

main.get("/", (req, res)=>{
    res.send(Estudiantes);
});

const server = main.listen(4000, ()=>{
    console.log("server on port ", 4000)
});

module.exports = server;