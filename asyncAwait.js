//ENCADENAMIENTO DE PROMESAS

function ordenarProducto(producto){
    return new  Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto} de Tochos`)
        setTimeout(()=>{
            if (producto === 'tacos') {
                resolve("Ordenando tacos con tocho");
            }else{
                reject("no hay ese producto disponible");
            }
        },2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise((resolve,reject)=>{
        console.log("Procesando respuesta...")
        console.log(`la respuesta fue: "${respuesta}"`)
        setTimeout(()=>{
            resolve("Gracias por tu compra");
        },4000);
    });
}

// encadenamiento de promesas, sirve para tener un proceso continuo asyncrono 
// es decir en el orden que queramos encadenando las promesas
/*ordenarProducto("tacos") 
    .then(respuesta =>{
        console.log("respuesta recibida");
        console.log(respuesta);
        return procesarPedido(respuesta);
    })
    .then(respuestaProcesada =>{
        console.log(respuestaProcesada)
    })
    .catch(error =>{
        console.log(error)
    })*/


// encadenamiento de promesas con ASYNC AWAIT: completa procesos asyncronos de manera sincrona, retornando promesas
async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto); // la declaracion de await siempre tiene que ir con async
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) { // el error de catch es el reject de la promesa
        console.log(error) 
    }
}

realizarPedido('tacos')
