const express = require('express');

const app = express();

const {infoCursos} = require('./datos/cursos.js');//sintaxis de desecstructuracion

//Routers
const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion',routerProgramacion);
const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas',routerMatematicas);


// Routing
app.get('/',(req,res)=>{
    res.send('Mi Primer servidor con Express. Cursos 💻.');
});

app.get('/api/cursos',(req,res)=>{
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;
// en Produccion process.env.PORT para q se asigne el puerto de manera automaica

app.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
})