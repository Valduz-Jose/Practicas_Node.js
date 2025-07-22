// function mostrarTema(tema){
//     console.log(`Estoy aprendiendo ${tema}`);
// }

// setTimeout(mostrarTema,3000,`Node.js`);

function sumar(a,b){
    console.log(a+b);
}


setTimeout(sumar,2000,5,6);

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}
console.log(`Antes de SetImmediate()`);
setImmediate(mostrarTema,`Node.js`);
console.log(`Despues de SetImmediate()`);
// SetImmediate() se ejecuta despues de el codigo sincrono, es la primera asincrona en ejecutarse (maxima prioridad en la lista de pendientes)

setInterval(mostrarTema,1500 ,'Javascript');

function sumare(a,b){
    console.log(a+b);
}
setInterval(sumare,1500 ,3,4);

