class Validacoes{

    /**
     * 
     * @param {string} string 
     * @returns boolean
     */

    static validaNome(string){
        if(string.length >=3){
            return true
        }else{
            return false
        }
    }
}