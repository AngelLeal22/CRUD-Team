// exportanos express con require
 
const express = require("express");

// creamos una app con express

const app = express();

//importamos los cursos con require y sintaxis de deestructuracion
const {infoCursos} = require("./datos/cursos.js")


//ROUTERS
//con el metodo USE le decimos que  utilice dicha ruta
const routerProgramacion = require("./routers/programacion.js")
app.use('/api/cursos/programacion',routerProgramacion)




//creamos las rutas (Routing)

//get, es un verbo para solicitar o obtener un recurso especifico.
// req(request es la solicitud)  response(es la respuesta)

app.get("/",(req, res) =>{
    res.send("Nuestro Primer servidor en equipo 💻.")

})

app.get('/api/cursos',(req, res) =>{
    res.send(JSON.stringify(infoCursos));
});



//creamos el puerto donde va a funcionar el servidor

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO,()=>{
    console.log(` el servidor esta escuchando en el puerto ${PUERTO}....` )

});
