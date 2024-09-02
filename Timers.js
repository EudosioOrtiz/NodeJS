function mostrarTema(tema){
    console.log(`Estoy aprendienedo ${tema}`)
}

mostrarTema('Node JS')
// funcion , tiempo de retraso, argumentos de funcion
setTimeout(mostrarTema, 1000, "Java");

function sumar(a,b){
    console.log(a + b);
} 

setTimeout(sumar,2000, 40, 45)

setImmediate(mostrarTema,"Python") // setInmediate tiene prioridad no1 de codigo asyncrono

console.log("codigo terminado")

setInterval(mostrarTema, 1500, "Express")