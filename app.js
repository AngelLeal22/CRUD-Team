// exportamos express con require 
const express = require("express");

// creamos una app con express
const app = express();

// importamos los cursos con require y sintaxis de desestructuración
const { infoCursos } = require("./datos/cursos.js");

// -------------------- ROUTERS -------------------- //
// con el método USE le decimos que utilice dicha ruta

// Router de programación
const routerProgramacion = require("./routers/programacion.js");
app.use("/api/cursos/programacion", routerProgramacion);

// Router de matemáticas
const routerMatematicas = require("./routers/Matematicas.js");
app.use("/api/cursos/matematicas", routerMatematicas);

// -------------------- RUTAS PRINCIPALES -------------------- //
// get, es un verbo para solicitar o obtener un recurso específico.
// req(request) es la solicitud, res(response) es la respuesta

// Ruta principal
app.get("/", (req, res) => {
  res.send("Nuestro Primer servidor en equipo 💻.");
});

// Todos los cursos
app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// -------------------- SERVIDOR -------------------- //
// creamos el puerto donde va a funcionar el servidor

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}....`);
});
