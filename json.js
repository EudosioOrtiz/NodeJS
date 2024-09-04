const curso = require('./jsonfile.json');
//trabajar la informacion en formato json tiene una relacion inmediata con javascript
console.log(curso.temas);

let infoCurso = {
    "titulo":"Aprende Node JS",
    "numVistas": 100234,
    "numLikes": 25400,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "public": true
}

console.log(infoCurso);

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

let infoCursoObjetoJSON = JSON.parse(infoCursoJSON);

console.log(infoCursoObjetoJSON);
console.log(typeof infoCursoObjetoJSON);
console.log(infoCursoObjetoJSON.numVistas);