// Paso 1: importamos express
const express = require("express");

// Paso 2: importamos los datos de cursos desde cursos.js
const { matematicas } = require("../datos/cursos.js").infoCursos;

// Paso 3: creamos el router
const routerMatematicas = express.Router();


routerMatematicas.use(express.json()); // Middleware para parsear JSON  


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

// metodos http POST para agregar un nuevo curso
routerMatematicas.post("/", (req, res) => {
  const cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.send(JSON.stringify(matematicas));
})

routerMatematicas.put("/:id",(req,res) =>{
    const cursoActualizado = req.body;
    const id = req.params.id

    const indice =matematicas.findIndex( curso=> curso.id == id)
    if (indice >= 0) {
        matematicas[indice] = cursoActualizado
        
    }
    res.send(JSON.stringify(matematicas));
})

// PACTH para actualizaciones de un recursos o un objeto
routerMatematicas.patch("/:id",(req,res) =>{
    const infoActualizada = req.body;
    const id = req.params.id  
    const indice = matematicas.findIndex(curso => curso.id == id)
    if (indice >= 0) {
       const cursoAModificar= matematicas[indice]
       //propiedad que permite modificar objetos
       Object.assign(cursoAModificar,infoActualizada)
        
    }
    res.send(JSON.stringify(matematicas));

})



// Método HTTP DELETE para eliminar un curso por id
routerMatematicas.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Convertir a número
  const index = matematicas.findIndex(curso => curso.id === id);

  if (index !== -1) {
    matematicas.splice(index, 1); // Elimina el curso encontrado
    res.json({
      mensaje: `Curso con id ${id} eliminado correctamente`,
      cursos: matematicas
    });
  } else {
    res.status(404).json({ error: `Curso con id ${id} no encontrado` });
  }
});


// Paso final: exportamos el router
module.exports = routerMatematicas;
