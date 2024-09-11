const express = require('express');
const app = express();

const {infoRZRs} = require("./datos/RZRs.js");

//router

const routerRZR = require("./routers/RZR.js")
app.use('/api/RZRs/RZR',routerRZR);

const routerRanger = require("./routers/ranger.js")
app.use('/api/RZRs/ranger',routerRanger);

const routerGeneral = require("./routers/general.js")
app.use('/api/RZRs/general',routerGeneral);

//console.log(infoRZRs)

//routing

app.get('/',(req, res)=>{
    res.send('Mi primer Servidor express 🦁');
});

app.get("/api/RZRs",(req,res)=>{
    res.send(infoRZRs);
});





//metodo no eficiente de routing
/*
app.get("/api/RZRs/ranger",(req,res)=>{
    res.send(infoRZRs.ranger);
});

app.get("/api/RZRs/RZR",(req,res)=>{
    res.send(infoRZRs.RZR);
});

app.get("/api/RZRs/general",(req,res)=>{
    res.send(infoRZRs.general);
})
*/
//

const PORT = process.env.PORT || 3000; // process.env.PORT permite trabajar con el puerto asigando en
// cas de tener un servivio de hosting
app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}...`);
});