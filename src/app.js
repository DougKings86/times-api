const http = require('http');
const express = require('express');
const teamsRoute = require('./routes/teams');
const championshipRoute = require('./routes/championship');


const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.set("port",port);
app.use(express.json());

app.use("/api/" , teamsRoute );
app.use("/api/" , championshipRoute );

// Middlewares de Tratamento de Erro
app.use((request , response , next ) =>{
    response.status(404).send();
});

app.use((error , request , response , next ) =>{
    response.status(500).json({ error });
});


const server = http.createServer(app);

server.listen(port , hostname, ()  =>{
    console.log(`Servidor iniciado em http://${hostname}:${port}/` );
});
