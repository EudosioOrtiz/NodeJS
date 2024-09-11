const express = require('express');
const {ranger} = require("../datos/RZRs.js").infoRZRs;

const routerRanger = express.Router();

//middleware
routerRanger.use(express.json());

routerRanger.get("/",(req,res)=>{
    res.send(JSON.stringify(ranger))
})

//ejemplo: http://localhost:3000/api/RZRs/ranger/medio
routerRanger.get("/:riesgo",(req,res)=>{ // los parametros en routing tiene que coincidir con el dato en string
    const riesgo = req.params.riesgo;
    const results = ranger.filter(rzr =>  rzr.riesgo === riesgo);
    
    if (results.length === 0) {
        return res.status(404).send(`No se encontraron vehiculos con el riesgo ${riesgo}`);
    }

    res.send(JSON.stringify(results))
});

module.exports = routerRanger;