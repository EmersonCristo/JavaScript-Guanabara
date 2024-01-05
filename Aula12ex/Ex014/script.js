function carregar() {
    var msg = window.document.getElementById('msg') // criação da variavel msg
    var img = window.document.getElementById('imagem') // Criação da váriavel imagem
    var data = new Date() // Adicionando ao software o tempo real da maquina que o está acessando
    var hora = data.getHours() // Atribuindo a hora real, puxando a hora do new date a cima 
    msg.innerHTML = `Agora são ${hora} horas.` //escrevendo para o usúario a hora 
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#rgb(177, 87, 14)'
    } else if (hora >=12 && hora < 18) {
        // BOA TARDE!
        img.scr = 'fototarde.jpg'
        document.body.style.background = 'rgb(83, 27, 79)'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = ' rgb(92, 12, 12)'
    }
}