const srvChampionship = require('../services/Championship-service');


exports.buscarUm = ( request , response , next ) => {
    const idRodada = request.params.id;
    srvChampionship.Find(idRodada)
    .then(( rows )=>{
            response.status(200).send(rows);
    })
     .catch( err => {
        response.status(500).send({message : "Erroa ao Executar a Consulta"});
        })
};

exports.buscarTodos =  ( request , response , next ) => {
    srvChampionship.Find(null)
    .then(( rows )=>{
            response.status(200).send(rows);
    })
    .catch( err => {
            response.status(500).send({message : "Erroa ao Executar a Consulta"});
        })
};
