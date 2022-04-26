import Database from "../infra/Database.js";

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


    static popular(tarefas) {
        const query = `INSERT INTO tarefas VALUES (?, ?, ?, ?, ?, ?, ?)`
        const body = Object.values(tarefas)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
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