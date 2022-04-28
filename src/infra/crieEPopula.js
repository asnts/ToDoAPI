import DatabaseMetodos from "../DAO/DatabaseMetodos.js";
import moment from "moment";

try {
    const table = await DatabaseMetodos.createTable()
    console.log(table);
} catch (error) {
    console.log(error.message);
}


try {
    await DatabaseMetodos.popular(
        {
            id: 7, 
            nome:"Primeira Tarefa", 
            descricao: "Tarefa teste primeira inicializacao", 
            status:"andamento",
            id_usuario:1,
            data_criacao:moment().format('YYYY-MM-DD'),
            data_conclusao:moment('03/08/2022', 'DD/MM/YYYY').format('YYYY-MM-DD')
        })
} catch (error) {
    console.log(error.message);
}
