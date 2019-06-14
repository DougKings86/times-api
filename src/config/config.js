module.exports = {
    _development : {
        database : {
            host : "localhost",
            port : 3306 ,
            name : "tt_telefonica",
            dialect : "mysql" ,  
            user : "root",
            password : ""
        }
    },
    development : {
        database : {
            host : "186.202.152.117",
            port : 3306 ,
            name : "tt_telefonica",
            database : "tt_telefonica",
            dialect : "mysql" ,  
            user : "tt_telefonica",
            password : "t3st3@v1v0"
        }
    },
    production : {
        database : {
            host : process.env.DBHOST,
            port : process.env.DBPORT ,
            name : process.env.DBNAME,
            dialect : process.env.DBDIALECT ,  
            user : process.env.DBUSER,
            password : process.env.DBPASS
        }

    } 

}