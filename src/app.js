import express from "express";
import * as dotenv from "dotenv";
import Tarefas from "./controllers/Tarefas.js";
import DatabaseMetodos from "./DAO/DatabaseMetodos.js"

dotenv.config();
const app = express();
const port = process.env.PORT|| 3000;

app.use(express.json());

DatabaseMetodos.createTable();

app.listen (port , ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
});

//app.use((req,res,next)=>{
//    console.log('passei aqui');
//    next()
//})

// tem que ser usado junto com o use(express.json())


Tarefas.routers(app);

