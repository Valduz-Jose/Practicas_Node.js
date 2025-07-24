const EventEmitter = require("events");
// console.log(EventEmitter);
const emisorProductos = new EventEmitter();
emisorProductos.on("Compra",()=>{
    console.log("Se realizo una compra");
});
emisorProductos.on("Venta",(total,numProductos)=>{
    console.log(`Se realizo una venta por $${total} por ${numProductos} productos`);
});
emisorProductos.emit("Compra");
emisorProductos.emit("Compra");
emisorProductos.emit("Compra");
emisorProductos.emit("Venta",500,8);