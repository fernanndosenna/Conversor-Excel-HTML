//classe de tabela
//receberá os dados processados

class Table{

    constructor(arr){
        this.header = arr[0]//pegando a primeira linha da tabela
        arr.shift();//removendo cabecalho da tabela
        this.rows = arr;
    }

    get RowCount(){//campo virtual

        return this.rows.length;

    }

    get ColumnCount(){

        return this.header.length
    }

}

module.exports = Table;