// exportamos express con require
const express = require("express");

//importamos el curso de idiomas
const { idiomas } = require("../datos/cursos.js").infoCursos;

//router
const routerIdiomas = express.Router();

//creamos las rutas

routerIdiomas.get("/", (req, res) => {
  res.send(JSON.stringify(idiomas));
});

routerIdiomas.get("/:idioma", (req, res) => {
  //extramos el parametro(lenguaje) con la solicitud
  const idioma = req.params.idioma;

  //filtramos los cursos de idiomas
  const resultado = idiomas.filter((curso) => curso.idioma === idioma);

  //condicional por si no se encuentra un curso valido
  if (resultado.length == 0) {
    return res.status(404).send(`no se encontraron cursos de ${idioma}`);
  }

  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultado.sort((a, b) => a.vistas - b.vistas))
    );
  } else {
    res.send(JSON.stringify(resultado));
  }
});

routerIdiomas.get("/:idioma/:nivel", (req, res) => {
  const idioma = req.params.idioma;
  const nivel = req.params.nivel;

  const resultado = idiomas.filter(
    (curso) => curso.idioma === idioma && curso.nivel === nivel
  );

  if (resultado.length == 0) {
    return res
      .status(404)
      .send(`no se encontraron cursos de ${idioma} ni de  ${nivel}`);
  }
  res.send(JSON.stringify(resultado));
});

//exportamos el router
module.exports = routerIdiomas;
