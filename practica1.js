// Sintaxis de importacion completa
// const saludos = require("./saludos.js");

// console.log(saludos.saludar("Jose Valduz"));
// console.log(saludos.saludarHolaMundo());

// Sintaxis de desestructuracion
const { saludar,saludarHolaMundo } = require("./saludos.js");

console.log(saludarHolaMundo());
console.log(saludar("Jose Valduz"));
