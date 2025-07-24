const estatusPedido=()=>{
   
    return  Math.random()<0.8;
}

// for (let index = 0; index < 10; index++) {
//     console.log(estatusPedido());
    
// }

const miPedidoDePizza =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (estatusPedido()) {
            resolve("Pedido exitoso su pizza va en camino")
        }else{
            reject("Ocurrio un error, Por favor intente nuevamente")
        }
    },3000);
});
// const manejarPedido = (mensajeDeCOnfirmacion)=>{
//     console.log(mensajeDeCOnfirmacion)
// };
// const rechazarPedido = (MensajedeError)=>{
//     console.log(MensajedeError)
// };

// miPedidoDePizza.then(manejarPedido,rechazarPedido)
// Method Chaining
miPedidoDePizza
    .then((mensajeDeCOnfirmacion)=>{
        console.log(mensajeDeCOnfirmacion)
    })
    .catch((MensajedeError)=>{
        console.log(MensajedeError)
    })

// const manejarPedido = (mensajeDeCOnfirmacion)=>{
//     console.log(mensajeDeCOnfirmacion)
// };
// const rechazarPedido = (MensajedeError)=>{
//     console.log(MensajedeError)
// };

// miPedidoDePizza.then(manejarPedido).catch(rechazarPedido)