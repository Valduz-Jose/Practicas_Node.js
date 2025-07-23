// const curso = require("./curso.json");
// console.log(curso.titulo);
// console.log(curso.temas);

let infoCurso={
    "titulo" : "Aprende Node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas" : [
        "javascript",
        "Node.js"
    ],
    "esPublico": true
}
// Objeto -> Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// Cadena de Caractere -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);

