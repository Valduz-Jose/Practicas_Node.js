const http =require('http');

const servidor = http.createServer((req,res)=>{
    res.end('Hola, Mundo. Estoy aprendiendo Node.js');
});

const PUERTO= 3000;

servidor.listen(PUERTO,()=>{
    console.log(`El Servidor esta escuchando en el puerto ${PUERTO}`);
});