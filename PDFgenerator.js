//classe para gerar pdf

var pdf = require('html-pdf')

class PDFgenerator{

    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err) => {})
    }

}

module.exports = PDFgenerator