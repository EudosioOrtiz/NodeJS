//importacion completa del modulo
//const saludo = require("./saludo");
//importacion por funcion exportada del modulo
//const{ saludar} = require("./saludo");
//importacion por funciones exportadas del modulo
const{ saludar, saludoHolamundo} = require("./saludo");

console.log(saludar("Eudosio Ortiz"))
console.log(saludoHolamundo())

console.warn("ocurrio un error")

//PROCESS

//console.error(new Error("Se cayo todo"));
console.log(process.argv)
console.log(process.argv[2])
console.log(process.argv[3])
//[node, app.js, 6, 7]
//  0       1    2  3

for (let i = 2; i < process.argv.length; i++){
    console.log(process.argv[i]);
2   
}

console.log(process.memoryUsage())

//OPERATION System

const os = require('os');

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());