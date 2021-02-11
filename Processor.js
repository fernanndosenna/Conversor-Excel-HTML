//processador de dados

class Processor {

    static Process(data){
        var a = data.split('\r\n'); //um array de strings

        var rows = []; //guardando cada linha

        a.forEach(row => {
          var arr =  row.split(","); //um array de linhas, cada linha sendo um array
            
          rows.push(arr);//adicionando linhas de array
        })

        return rows
    }

}

module.exports = Processor