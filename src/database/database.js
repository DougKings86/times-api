const mysql = require( 'mysql' );


class Database {
    constructor( ) {
        if(!this.connection ) {
            const enviroment = process.env.NODE_ENV || "development";
            const config = require ("../config/config.js")[enviroment];
            this.connection = mysql.createPool( config.database );
        } 
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
    const db = new Database();
    module.exports = db;

