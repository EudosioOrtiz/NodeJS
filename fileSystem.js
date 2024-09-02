const { error } = require('console');
const fs = require('fs')

//Versiones asyncronas pueden ejecutarse en tiempos diferentes ya afectar el orden
//las versiones syncronas de estas funciones se ejecutan en orden del codigo

//leer un archivo
fs.readFile('fileSystem.html','utf-8',(error, contenido)=>{
    if (error) {
        // throw muestra el error y para el proceso del codigo
        throw error;
    }else{
        console.log(contenido);
    }
})

//renombrar un archivo
/*fs.rename('fs.html','fileSystem.html',(error)=>{
    if (error) {
        // throw muestra el error y para el proceso del codigo
        throw error;
    }
    console.log('Nombre cambiado con exito')
})*/

// anadir informacion al archivo
fs.appendFile('fileSystem.html','<p>wola</p>',(error)=>{
    if (error) {
        throw error
    }
    console.log('Archivo actualizado')
})

//reemplazar todo el contenido del archivo

fs.writeFile('fileSystem.html','contenido nuevo',(error)=>{
    if (error) {
        throw error
    }
    console.log('contenido actualizado')
})

// eliminar archivos
fs.unlink('eliminar.html',(error)=>{
    if (error) {
        throw error
    }
    console.log('archivo eliminado')
})