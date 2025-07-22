// const fs = require(`fs`);
// console.log('Antes de leer el archivo');
// // Leer Archivo
// fs.readFile('index.html','utf-8',(err,contenido)=>{
//     if(err){
//         throw err;//detiene la ejecucion del programa aqui
//         // console.log(err);
//     }else{
//         console.log(contenido);
//     }
//     console.log('Mensaje...');
// });

// console.log('despues de leer el archivo');
// //Cambiar nombre de archivo
// fs.rename('index.html','main.html',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Nombre cambiado con exito...');

// });

// console.log('Despues de cambiar el nombre del archivo');
// //Agregar contenido al final de un archivo

// fs.appendFile('main.html','<p>Hola</p>',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Archivo Actualizado');
// });


// console.log('despues de agregar contenido a el archivo');
// //Reempalzar todo el contenido
// fs.writeFile('main.html','Contenido Nuevo',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Contenido Reemplazado exitosamente');
// })

// console.log('despues de reemplazar el contenido del archivo');
// // Eliminar archivos

// fs.unlink('main.html',(err)=>{
//      if(err){
//         throw err;
//     }
//     console.log('Archivo eliminado');
// })


// console.log('despues de eliminar el archivo');

const fs = require(`fs`);
console.log('Antes de leer el archivo');
// Leer Archivo
const archivo=fs.readFileSync('index.html','utf-8');

console.log(archivo);
console.log('despues de leer el archivo');
//Cambiar nombre de archivo
fs.renameSync('index.html','main.html');

console.log('Despues de cambiar el nombre del archivo');
//Agregar contenido al final de un archivo

fs.appendFileSync('main.html','<p>Hola</p>');


console.log('despues de agregar contenido a el archivo');
//Reempalzar todo el contenido
fs.writeFileSync('main.html','Contenido Nuevo')

console.log('despues de reemplazar el contenido del archivo');
// Eliminar archivos

fs.unlinkSync('main.html')


console.log('despues de eliminar el archivo');