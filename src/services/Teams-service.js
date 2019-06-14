const database = require('../database/database');


exports.Find = async (idTime , nomeTime) =>{

    let   query = " select distinct DATE_FORMAT(SYSDATE(), \"%d/%m/%Y\")  AS Data, t.nomeTime , "+
                "  vitorias , "+
                "  d.derrotas derrotas, "+
                "  qtd.qtdJogos  "+
                "  from tt_times t ,  "+
                "  ( "+
                "      select j.jogos qtdJogos , "+
                "      codigotime "+
                "      from (   "+
                "          select count(*)  as jogos, "+
                "          t1.codigoTime as codigotime "+
                "          from tt_rodadas r1 , tt_times t1 "+
                "          where  r1.codigoTimeA = t1.codigoTime  or r1.codigoTimeB =  t1.codigoTime  "+
                "          group by codigotime "+
                "      ) j "+
                "  ) qtd , "+
                "  (  "+
                "  select sum(vit) vitorias, "+
                "  codigotime "+
                "  from ( "+
                "  select count(*)  as vit, "+
                "              r1.codigoTimeA as codigotime "+
                "      from tt_rodadas r1 , tt_times t1 "+
                "      where  r1.placarTimeA > r1.placarTimeB  AND r1.codigoTimeA =  t1.codigoTime  "+
                "      group by codigotime "+
                "  union all "+
                "      select count(*)  as vit, "+
                "              r.codigoTimeB as codigotime "+
                "      from tt_rodadas r , tt_times t2 "+
                "      where  r.placarTimeB > r.placarTimeA  AND r.codigoTimeB=  t2.codigoTime "+ 
                "      group by codigotime "+
                "  ) v "+
                "  group by codigotime "+
                "  ) v "+
                "  , (  "+
                "  select sum(derrotas) derrotas , "+
                "  codigotime "+
                "  from ( "+
                "  select count(*)  as derrotas, "+
                "              r1.codigoTimeA as codigotime "+
                "      from tt_rodadas r1 , tt_times t1 "+
                "      where  r1.placarTimeA < r1.placarTimeB  AND r1.codigoTimeA =  t1.codigoTime "+
                "      group by codigotime "+
                "  union all "+
                "      select count(*)  as derrotas, "+
                "              r.codigoTimeB as codigotime "+
                "      from tt_rodadas r , tt_times t2 "+
                "      where  r.placarTimeB < r.placarTimeA  AND r.codigoTimeB=  t2.codigoTime  "+
                "      group by codigotime "+
                "  ) d "+
                "  group by codigotime "+
                "  ) d "+
                "  where t.codigoTime = d.codigotime   "+
                "  and t.codigoTime   = v.codigotime "+
                "  and t.codigoTime    = qtd.codigotime ";
                    if (null !== idTime){
                        query += ` and t.codigoTime = ${idTime} `
                    }
                    query += " order by t.nomeTime" ;
    return await   database.query( query)
        .then( rows => {
            return (rows) ;
        } )
        .catch( err => {
            console.log(err);
        });
 
}
