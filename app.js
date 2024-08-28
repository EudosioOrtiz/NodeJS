//importacion completa del modulo
//const saludo = require("./saludo");
//importacion por funcion exportada del modulo
//const{ saludar} = require("./saludo");
//importacion por funciones exportadas del modulo
const{ saludar, saludoHolamundo} = require("./saludo");

console.log(saludo.saludar("Eudosio Ortiz"))
console.log(saludo.saludoHolamundo())