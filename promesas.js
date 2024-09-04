const { resolve } = require("path");

const promesaCumplida = true;

const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (promesaCumplida) {
            resolve('promesa cumplida!')//cuando la promesa de cumple envia el valor que contiene resolve
        } else{
            reject('promesa rechazada!')//cuando la promesa de no cumple envia el valor que contiene reject
        }
    },3000);
});

const manejarPromesaCumplida = (value)=>{console.log(value)}

const manejarPromesaRechazada = (rejectReason)=>{console.log(rejectReason)}

myPromise.then(manejarPromesaCumplida,manejarPromesaRechazada);


const estatusPedido = () =>{
    return  Math.random() < 0.5;
}

const miPedidoTacos = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        if (estatusPedido()) {
            resolve("tus tacos estan en camino!")
        } else {
            reject("se acabaron los tacos")
        }
    },3000)
});

//const manejarPedidoCumplido = (value)=>{console.log(value)}

//const manejarPedidoRechazado = (rejectReason)=>{console.log(rejectReason)}

//miPedidoTacos.then(manejarPedidoCumplido,manejarPedidoRechazado);

//o

miPedidoTacos
    .then((confirmacion)=>{console.log(confirmacion)})
    .catch((rechazo)=>{console.log(rechazo)})


