// paso 1 exportamos express con require
const express = require("express");

//importamos
const {programacion} = require("../datos/cursos.js").infoCursos 



//router
const routerProgramacion = express.Router()

// para poder procesar el cuerpo(body) de la solicitud en formato json
routerProgramacion.use(express.json())



//creacion de rutas

routerProgramacion.get('/',(req, res) =>{
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje',(req, res) =>{
    //extramos el parametro(lenguaje) con la solicitud
    
    const lenguaje = req.params.lenguaje

    //filtramos los cursos

    const resultado = programacion.filter(curso => curso.lenguaje === lenguaje)

    //condicion si no se cuentra un curso valido

    if (resultado.length == 0) {
        // incluimos un return para que no continue con la ejecucion del codigo
        return res.status(404).send(`no se encontraron cursos de ${lenguaje}`);
    }

    //utilizamos los parametros query para hacer busquedas mas especificas son agregandos con ? 
    if (req.query.ordenar === "vistas") {
        return res.send(JSON.stringify(resultado.sort((a,b) => a.vistas - b.vistas)));
        
    }else{
        res.send(JSON.stringify(resultado));

    }

});

routerProgramacion.get('/:lenguaje/:nivel',(req, res) =>{
   const lenguaje = req.params.lenguaje
   const nivel = req.params.nivel

   const resultado = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)

    if (resultado.length == 0) {
        // incluimos un return para que no continue con la ejecucion del codigo
        return res.status(404).send(`no se encontraron cursos de ${lenguaje} ni de  ${nivel}`);
    }
    res.send(JSON.stringify(resultado));
});


//metodo POST (es un verbo para  crear un recurso especifico)

routerProgramacion.post("/",(req,res) =>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo)
    res.send(JSON.stringify(programacion));

})

//metodo PUT ( verbo para modificar un recurso especifico)

routerProgramacion.put("/:id",(req,res) =>{
    const cursoActualizado = req.body;
    const id = req.params.id

    const indice =programacion.findIndex( curso=> curso.id == id)
    if (indice >= 0) {
        programacion[indice] = cursoActualizado
        
    }
    res.send(JSON.stringify(programacion));
})

//metodo PATCH ( se refiere a la acción de aplicar modificaciones parciales a un recurso existente)
routerProgramacion.patch("/:id",(req,res) =>{
const infoActualizada = req.body
const id = req.params.id
//para buscar el indice que estamos buscando xd
const indice =programacion.findIndex( curso=> curso.id == id)

 if (indice >= 0) {
       const cursoAModificar= programacion[indice]
       //propiedad que permite modificar objetos
       Object.assign(cursoAModificar,infoActualizada)
        
    }
    res.send(JSON.stringify(programacion));

})

//metodo DELETE ( para eliminar)

routerProgramacion.delete("/:id",(req,res) =>{
    const id = req.params.id 
    const indice =programacion.findIndex( curso => curso.id == id)

    if (indice >= 0) {
        programacion.splice(indice, 1)
        
    }
    res.send(programacion);
})

//exportamos el router
module.exports = routerProgramacion