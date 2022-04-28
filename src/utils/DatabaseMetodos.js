import Database from "../infra/Database.js";
import moment from "moment";

class DatabaseMetodos{

    static createTable(){
        const tabela_tarefas = `
        CREATE TABLE IF NOT EXISTS tarefas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR, 
            descricao VARCHAR,
            status VARCHAR,
            id_usuario INTEGER,
            data_criacao DATE,
            data_conclusao DATE
        )
        `

        return new Promise ((resolve, reject) => {
            Database.run(tabela_tarefas, (e) => {
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    /**
     * 
     * @param {object} tarefas 
     * @returns Promises<object>
     */


    static popular(tarefa) {
        const query = `INSERT INTO tarefas VALUES (?, ?, ?, ?, ?, ?, ?)`
        const body = Object.values(tarefa);
        const dataCriacao = moment().format('YYYY-MM-DD');
        const dataConclusao = moment('03/08/2022', 'DD/MM/YYYY').format('YYYY-MM-DD');
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, dataCriacao, dataConclusao], (e) => {
                if (e) {
                    reject(e) 
                } else { 
                    resolve({ message: "tarefa criada com sucesso" }) 
                }
            })
        })
    }



    static listarTodos(){
        const query = "SELECT * FROM tarefas";
        return new Promise ((resolve,reject)=>{
            Database.all(query, (error, result) =>{
                if(error){
                    reject(error.message)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

export default DatabaseMetodos;