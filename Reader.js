//arquivo de leitura
const fs = require('fs');//gerenciador de arquivo
const util = require('util');

//var novaFuncaoComPromise  = util.promisify(funcaoVelhaComCallback)//irá converter uma funcao de call back em uma promise


class Reader{

    constructor() {
        this.reader = util.promisify(fs.readFile) //salvando uma versao de promise da funcao antiga
    }
    
    async Read(filepath){
       
        try{
            return await this.reader(filepath, "utf-8");//esperar ler e retornar.
        }catch(err){
            return undefined;
        }
       
    }
    
}

module.exports = Reader