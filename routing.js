const http = require("http");
const {infoRZRs} = require("./RZRs.js");

const servidor = http.createServer((req,res)=>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res)
        default:
            res.statusCode = 501;
            res.end(`el metodo usado no puede ser manejado por el servidor: ${method}`);
    }

});

function manejarSolicitudGET(req, res){
    const path = req.url;

    console.log(res.statusCode); // status 200 por defecto no necesita asignarse

    if (path === '/') {
        //res.statusCode = 200;
        //res.writeHead(200, {'Content-Type': 'application/json'}) se puede configurar la cabecera de la solicitud
        return res.end('Welcome to my first server and API created with NodeJS')
    } else if (path === "/Request"){
        //res.statusCode = 200;
        return res.end(JSON.stringify(infoRZRs))
    } else if (path === "/Request/History"){
        //res.statusCode = 200;
        return res.end(JSON.stringify(infoRZRs.RZR))
    }

    res.statusCode = 404;
    return res.end('el Recurso no existe...')

}

function manejarSolicitudPOST(req, res){
    const path = req.url;
    if (path === "/Request/History") {
        let body = '';
        req.on('data',content =>{
            body +=  content.toString();
        })

        req.on('end', ()=>{
            console.log(body);
            console.log(typeof body);

            body = JSON.parse(body);
            console.log(typeof body);
            console.log(body.name);
            


            return res.end('se ha recibido la solicitid de POST para ingresar /Request/History');
        })

       //return res.end('se ha recibido la solicitid de POST para /Request/History');
    }

    //res.statusCode = 404;
    //return res.end('el Recurso no se ingreso...')

}

const PORT = 3000;

servidor.listen(PORT,()=>{
    console.log(`El servidor esta escuchando en http://localhost:${PORT}...`)
})