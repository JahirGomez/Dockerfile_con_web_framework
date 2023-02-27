const express = require ("express");

class Estudiante {
    constructor (matricula, nombre){
        this.matricula = matricula;
        this.nombre = nombre;
    }
}

let Estudiantes = [];

const estudiante1 = new Estudiante ("Horacio", 17000919);
Estudiantes.push(estudiante1);
const estudiante2 = new Estudiante ("Jahir", 17000918);
Estudiantes.push(estudiante2);
const estudiante3 = new Estudiante ("Juany", 17000917);
Estudiantes.push(estudiante3);
const estudiante4 = new Estudiante ("Fernando", 17000916);
Estudiantes.push(estudiante4);

const main = express();

main.get("/", (req, res)=>{
    //res.send("Hello world!");
    res.send(Estudiantes);
});

main.listen(4000, ()=>{
    console.log("server on port ", 4000)
}); 