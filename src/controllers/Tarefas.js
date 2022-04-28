import { response } from "express";
import Database from "../infra/Database.js";
import TarefasModel from "../models/TarefasModel.js";
import DatabaseMetodos  from "../DAO/DatabaseMetodos.js";
import Validacoes from "../services/Validacoes.js";


class Tarefas{
    static routers (app){
        app.get('/tarefas', async (req,res)=>{
            try {
                const response = await DatabaseMetodos.listarTodos();
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error)
            }

//            res.status(200).send(Database)
        });

        app.get('/tarefas/:id', async (req,res) =>{
            try {
                const id = req.params.id;
                const response = await DatabaseMetodos.listarUm(id);
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error)
            }            
//            const id = req.params.id;
//            res.status(200).json(Database[id])
        });

        app.post('/tarefas', async (req,res)=>{
            try{
                if(Validacoes.validaNome(req.body.nome) && Validacoes.validaStatus(req.body.status)){
                    const tarefa = new TarefasModel(...Object.values(req.body));
                    const response = await DatabaseMetodos.popular(tarefa);
                    res.status(201).json(response);
                }else{
                    throw new Error('A requisição está fora dos padrões, favor consultar documentacao')
                }
            } catch(error){
                res.status(400).json({erro: error.message})
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