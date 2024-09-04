const EventEmiter = require("events");
// los eventos son asyncronos por lo que no alteran el orden de las funciones sincronas
console.log(EventEmiter);

const emisorProductos = new EventEmiter();

emisorProductos.on('compra',(total, numProductos)=>{
    console.log(`se realizo una compra por $${total}`)
    console.log(`y ${numProductos} productos.`)
}) // se asocia el evento compra a la funcion que queramos y se enciende esa escucha

emisorProductos.emit('compra', 500, 5);// ejecuta el evento asociado con el nombre compra
emisorProductos.emit('compra', 750, 10);
