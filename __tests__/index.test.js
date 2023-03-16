const { expect } = require("@jest/globals");
const request = require("supertest");
const server = require("../index.js");

describe("Test de API de Estudiantes", () => {
    afterEach(() => {
      server.close(); // Detenemos el servidor después de cada caso de prueba
    });
  
    it("Debería devolver una lista de estudiantes con los datos correctos", async () => {
    	const response = await request(server).get("/");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(4);
        expect(response.body[0]).toMatchObject({ matricula: 17000919, nombre: "Horacio" });
        expect(response.body[1]).toMatchObject({ matricula: 17000918, nombre: "Jahir" });
        expect(response.body[2]).toMatchObject({ matricula: 17000917, nombre: "Juany" });
        expect(response.body[3]).toMatchObject({ matricula: 17000916, nombre: "Fernando" });
    });
});