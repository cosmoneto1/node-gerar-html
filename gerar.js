const ejs = require('ejs')
const fs = require('fs')

const dados = {
    nome: 'Fulano de Tal',
    texto1: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.',
    texto2: 'Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico.',
    texto3: 'O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados.'
}

ejs.renderFile('./template.ejs', dados, (err, html_string) => {
    if (err) {
        console.log(err)
        return
    }

    fs.writeFile('template.html', html_string, (erro) => {
        if (erro) {
            console.log(erro)
            return
        }
        console.log('Ok template.html')
    })

});