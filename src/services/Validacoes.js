class Validacoes{

    /**
     * 
     * @param {string} string 
     * @returns boolean
     */

    static validaNome(nome){
        return nome.length >=3
    }

    static validaTelefone(telefone){
        const numTel = parseInt(telefone);
        return (numTel == telefone && numTel.length == 13 )
        // se numTel for NAN da false typeof number vai dar falso pq é um json nao um numero isolado
        // no teste ele ta comendo uma letra no paseInt
    }
}