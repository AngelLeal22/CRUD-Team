// Paso 1: importamos express
const express = require("express");

// Paso 2: importamos los datos de cursos desde cursos.js
const { matematicas } = require("../datos/cursos.js").infoCursos;

// Paso 3: creamos el router
const routerMatematicas = express.Router();

// -------------------- Rutas -------------------- //

// Obtener todos los cursos de matemáticas
routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

// Obtener cursos por tema (ej: algebra, calculo, trigonometria)
routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;

  // Filtramos por tema
  const resultado = matematicas.filter(
    (curso) => curso.tema.toLowerCase() === tema.toLowerCase()
  );

  // Si no encuentra cursos
  if (resultado.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos del tema ${tema}`);
  }

  // Si hay query ?ordenar=vistas, ordenamos por vistas
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultado.sort((a, b) => a.vistas - b.vistas))
    );
  } else {
    res.send(JSON.stringify(resultado));
  }
});

// Obtener cursos por tema y nivel
routerMatematicas.get("/:tema/:nivel", (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;

  const resultado = matematicas.filter(
    (curso) =>
      curso.tema.toLowerCase() === tema.toLowerCase() &&
      curso.nivel.toLowerCase() === nivel.toLowerCase()
  );

  if (resultado.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${tema} en nivel ${nivel}`);
  }

  res.send(JSON.stringify(resultado));
});

// Paso final: exportamos el router
module.exports = routerMatematicas;
