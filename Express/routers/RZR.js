const express = require('express');
const {RZR} = require("../datos/RZRs.js").infoRZRs;

const routerRZR = express.Router();

//middleware
routerRZR.use(express.json());

routerRZR.get("/",(req,res)=>{
    res.send(JSON.stringify(RZR))
})

//ejemplo: http://localhost:3000/api/RZRs/RZR/v4
routerRZR.get("/:motor",(req,res)=>{ // filtra el parametro de motor del array RZR en el objeto RZRs
    const motor = req.params.motor;
    const results = RZR.filter(rzr =>  rzr.motor === motor);

    if (results.length === 0) {
        return res.status(404).send(`No se encontraron vehiculos con el motor ${motor}`);
    }
    //parametros query, el parametro query se puede hacer en una funcion para que todos las consultas 
    //puedan tener ese parametro para usarse 
    console.log(req.query.ordenar)
    if (req.query.ordenar === 'id') {
       return res.send(JSON.stringify(results.sort((a,b) => a.id - b.id)));
    }

    res.send(JSON.stringify(results));
});

routerRZR.post("/",(req, res)=>{
    let rzrNuevo = req.body;
    RZR.push(rzrNuevo);
    res.send(JSON.stringify(RZR))
})

module.exports = routerRZR;