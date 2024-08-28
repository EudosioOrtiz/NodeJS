function saludar(nombre) {
    return `Hola ${nombre}`;
}

function saludoHolamundo() {
    return `Hola mundo`;
}

//Exportacion de funciones en linea
//module.exports.saludar = saludar
//module.exports.saludoHolamundo = saludoHolamundo
//o
//exportacion de funciones como objeto
module.exports = {
    saludar:saludar,
    saludoHolamundo: saludoHolamundo
}