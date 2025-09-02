// paso 1 exportamos express con require
const express = require("express");

//importamos
const {programacion} = require("../datos/cursos.js").infoCursos 


//router
const routerProgramacion = express.Router()




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


//exportamos el router
module.exports = routerProgramacion