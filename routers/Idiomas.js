// exportamos express con require
const express = require("express");

//importamos el curso de idiomas
const { idiomas } = require("../datos/cursos.js").infoCursos;

//router
const routerIdiomas = express.Router();

// Procesa el body de la solicitud en formato json
routerIdiomas.use(express.json())

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

//metodo POST (es un verbo para  crear un recurso especifico)

routerIdiomas.post("/",(req,res) =>{
    let cursoNuevo = req.body;
    idiomas.push(cursoNuevo)
    res.send(JSON.stringify(idiomas));

})

//metodo PUT ( verbo para modificar un recurso especifico)

routerIdiomas.put("/:id",(req,res) =>{
    const cursoActualizado = req.body;
    const id = req.params.id

    const indice =idiomas.findIndex( curso => curso.id == id)
    if (indice >= 0) {
        idiomas[indice] = cursoActualizado
        
    }
    res.send(JSON.stringify(idiomas));
})

//metodo PATCH ( se refiere a la acción de aplicar modificaciones parciales a un recurso existente)
routerIdiomas.patch("/:id",(req,res) =>{
const infoActualizada = req.body
const id = req.params.id
//para buscar el indice que estamos buscando xd
const indice =idiomas.findIndex( curso => curso.id == id)

 if (indice >= 0) {
       const cursoAModificar= idiomas[indice]
       //propiedad que permite modificar objetos
       Object.assign(cursoAModificar,infoActualizada)
        
    }
    res.send(JSON.stringify(idiomas));

})

//metodo DELETE ( para eliminar)

routerIdiomas.delete("/:id",(req,res) =>{
    const id = req.params.id 
    const indice =idiomas.findIndex( curso => curso.id == id)

    if (indice >= 0) {
        idiomas.splice(indice, 1)
        
    }
    res.send(idiomas);
})

//exportamos el router
module.exports = routerIdiomas;
