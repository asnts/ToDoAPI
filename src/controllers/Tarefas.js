import { response } from "express";
import Database from "../infra/Database.js";
import TarefasModel from "../models/TarefasModel.js";
import DatabaseMetodos  from "../DAO/DatabaseMetodos.js"


class Tarefas{
    static routers (app){
        app.get('/tarefas', async (req,res)=>{
            const response = await DatabaseMetodos.listarTodos();
            res.status(200).json(response)
//            res.status(200).send(Database)
        });

        app.get('/tarefas/:id', (req,res) =>{
            const id = req.params.id;
            console.log(id);
            res.status(200).json(Database[id])
        });

        app.post('/tarefas', async (req,res)=>{
            const tarefa = new TarefasModel(...Object.values(req.body));
            try{
                const response = await DatabaseMetodos.popular(tarefa);
                res.status(201).json(response);
            } catch(error){
                res.status(400).json(error)
            }


//           Database.push(tarefa)
        });

 //       app.delete('/tarefas/:id', (req,res)=>{
 //          const id = req.params.id;
 //           const objDeletado = Database.splice(id,1);
  //          res.status(200).send({"mensagem": `Foi deletada a tarefa de título: ${objDeletado[0].titulo}`});
  //      });

        // colocar o obj inteiro no corpo da requisicao

  //      app.put('/tarefas/:id', (req,res)=>{
 //           const id = req.params.id;
            // realizar update do elemento com req.body
  //          res.status(200).json(`Tarefa de título ${Database[id].titulo}`);
  //      });

    }

}

export default Tarefas;