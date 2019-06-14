const srvTeams = require('../services/Teams-service');


exports.buscarUm = ( request , response , next ) => {
    const paramIdTeam = request.params.id;
     idTeam = parseInt(paramIdTeam) || 0;
 
    if (!Number.isInteger(idTeam)) {
        response.status(Status.BAD_REQUEST).send()
    }


    srvTeams.Find(idTeam)
    .then(( rows )=>{
            response.status(200).send(rows);
    })
     .catch( err => {
        response.status(500).send({message : "Erroa ao Executar a Consulta"});
        })
};

exports.buscarTodos =  ( request , response , next ) => {
    srvTeams.Find(null ,null)
    .then(( rows )=>{
            response.status(200).send(rows);
    })
    .catch( err => {
            response.status(500).send({message : "Erroa ao Executar a Consulta"});
        })
};
