var ejs = require('ejs')



class HtmlParser{
    static async Parser(table){
        //procesando o arquivo ejs
       return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows}) 
    }
}

module.exports = HtmlParser