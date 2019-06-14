const database = require('../database/database');


exports.Find = async (id) =>{

    let   query = "select r.codigoRodada , "+
            "r.dataJogo , "+
            "r.horaJogo, "+
            "mandante.nomeTime as 'Mandante', "+
            "visitante.nomeTime as 'Visitante', "+
            "r.placarTimeA as 'Placar Mandante', "+
            "r.placarTimeB as 'Placar Visitante' "+
            "from  "+
            "tt_rodadas r "+
            "inner join tt_times mandante "+
            "on (r.codigoTimeA = mandante.codigoTime) "+
            "inner join tt_times visitante  "+
            "on (r.codigoTimeB = visitante.codigoTime)" ;
if(id){
    query += ` Where r.codigoRodada = ${id} `
}
    return await   database.query( query)
        .then( rows => {
          //  database.close();
            return (rows) ;
        } )
        .catch( err => {
            console.log(err);
        });
 
}
