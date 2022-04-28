

class TarefasModel{
    constructor(titulo, descricao, status, idUsuario, dataConclusao){
        this.titulo=titulo;
        this.descricao=descricao;
        this.status=status;
        this.idUsuario = idUsuario;
        this.dataConclusao=dataConclusao;
    }
}

export default TarefasModel;