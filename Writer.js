const fs = require('fs');
const util = require('util');//conversor de funcao da escrito de um arquivo em uma promise

class Writer{

    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

   async  Write(filename, data){
        try{

            await this.writer(filename, data);
            return  true;

        }catch(err){
            return false;
        }
    }
}


module.exports = Writer;

