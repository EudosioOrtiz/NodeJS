const http = require("http");

const servidor = http.createServer((req,res)=>{
    console.log('Solicitud nueva')
    console.log('====> req')
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log('====> res')
    console.log(res.statusCode)
    
    res.setHeader('content-type','application/json')
    res.end("hola, mundo");

});

const PORT = 3000;

servidor.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}...`)
})
