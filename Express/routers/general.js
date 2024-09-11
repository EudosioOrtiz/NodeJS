const express = require('express');
const {general} = require("../datos/RZRs.js").infoRZRs;

const routerGeneral = express.Router();

//middleware
routerGeneral.use(express.json());

routerGeneral.get("/",(req,res)=>{
    res.send(JSON.stringify(general))
})

//ejemplo: http://localhost:3000/api/RZRs/general/medio/v6
routerGeneral.get("/:riesgo/:motor",(req,res)=>{ // los parametros en routing tiene que coincidir con el dato en string
    const riesgo = req.params.riesgo;
    const motor = req.params.motor;
    const results = general.filter(rzr => rzr.riesgo === riesgo && rzr.motor === motor);
    
    if (results.length === 0) {
        return res.status(404).send(`No se encontraron vehiculos con el riesgo ${riesgo} y el motor ${motor}`);
    }

    res.send(JSON.stringify(results));
});

module.exports = routerGeneral;