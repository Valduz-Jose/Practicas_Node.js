

const http = require ('http');
const cursos = require('./cursos');
const servidor= http.createServer((req,res)=>{
    const {method} = req;
    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req,res);
        default:
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`)
            break;
    }
});
const PUERTO =3000;
servidor.listen(PUERTO,()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});