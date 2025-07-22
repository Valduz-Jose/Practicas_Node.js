console.log(`Hola, Mundo`);
console.warn(`Ocurrio un error...`);
console.error(`Ocurrio un error Grave`);
console.error(new Error(`Ocurrio un error!!!`));

console.log(process);
console.log(process.env);

console.log(process.argv[2]);

for (let index = 2; index < process.argv.length; index++) {
    console.log(process.argv[index]);
    
}

console.log(process.memoryUsage());

