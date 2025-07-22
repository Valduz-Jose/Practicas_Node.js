function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarHolaMundo(){
    return `Hola, Mundo`;
}

// console.log(module.exports);
// Esta es una sintaxis de importacion
// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
    saludarHolaMundo:saludarHolaMundo,
    saludar:saludar
};
// console.log(module.exports);
