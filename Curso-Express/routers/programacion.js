const express = require('express');
const {programacion} = require('../datos/cursos.js').infoCursos;
const routerProgramacion = express.Router();

// Middleware
routerProgramacion.use(express.json());//procesar el cuerpo de la solicitud

routerProgramacion.get('/',(req,res)=>{
    res.json(programacion);
});

routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso=>curso.lenguaje === lenguaje);
    if (resultados.length===0) {
        return res.status(404).send(`No se encontarron cursos de ${lenguaje}`);
        
    }

    // console.log(req.query.ordenar);
    if (req.query.ordenar === 'vistas') {
        return res.send(JSON.stringify(resultados.sort((a,b)=> a.vistas-b.vistas)));
    }else{
        return res.send(JSON.stringify(resultados));
    }
    res.json(resultados);
    
});

routerProgramacion.get('/:lenguaje/:nivel',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;


    const resultados = programacion.filter(curso=>curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length===0) {
        return res.status(404).send(`No se encontarron cursos de ${lenguaje} de nivel ${nivel}`);
    //    return res.status(404).end(); 
    }
    res.json(resultados);
});

// Agregando un nuevo curso
routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
});

// PUT : Actualizar 
routerProgramacion.put('/:id',(req,res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso=>curso.id == id);//busca un indice en un arreglo
    if (indice >=0) {
        programacion[indice] = cursoActualizado;
    } 
    res.send(JSON.stringify(programacion));
})

// PATCH
routerProgramacion.patch('/:id',(req,res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice>=0) {
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar,infoActualizada);
    }
    res.send(JSON.stringify(programacion));
});

// DELETE
routerProgramacion.delete('/:id',(req,res)=>{

    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if (indice>=0) {
        programacion.splice(indice,1);
    }
    res.send(programacion);
});

module.exports=routerProgramacion;