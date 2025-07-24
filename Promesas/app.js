const promesaCumplida=false;

const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa Cumplida!');
        }else{
            reject('Promesa Rechazada...');
        }
    },3000);
});
const manejaPromesaCumplida=(valor)=>{
    console.log(valor);
}
const manejaPromesaRechazada=(razonRechazo)=>{
    console.log(razonRechazo);
}
miPromesa.then(manejaPromesaCumplida,manejaPromesaRechazada);