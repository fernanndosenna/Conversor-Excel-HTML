var Reader = require('./Reader'); //leitor de dador
var Writer = require("./Writer")
var Processor = require('./Processor'); //processador de dados
var Table = require('./Table'); //tabela de dados
var HtmlParser = require('./HtmlParser');
var PDFgenerator = require('./PDFgenerator'); //gerador de pdf

var leitor = new Reader();
var escritor = new Writer();

async function main(){ //executando
    var dados = await leitor.Read("./users.csv");
    var dadosProcessados = Processor.Process(dados);


    var usuarios = new Table(dadosProcessados);

    //usuarios.rows.push("Joao joao", "formacao PHP", "php", "32")//adicionando uma nova linha

    var html = await HtmlParser.Parser(usuarios); //passando a tabela 


    escritor.Write( Date.now() + ".html", html);

    PDFgenerator.WritePDF(Date.now() + ".pdf", html)

}


main();