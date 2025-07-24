const http = require('http');

const servidor = http.createServer((req,res)=>{
    console.log('===> req (respuesta)');
    // console.log(req);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(res);
    console.log(res.statusCode);//200 ok
    // res.statusCode =404;
    // console.log(res.statusCode);
    res.setHeader('content-type','application/json');
    console.log(res.getHeaders());
    res.end('Hola Mundo');

});//crear servidor
const puerto = 3000;
servidor.listen(puerto,()=>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})
