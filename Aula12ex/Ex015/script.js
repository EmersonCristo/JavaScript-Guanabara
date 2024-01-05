function verificar () {
    var data = new Date() //add horario real a maquina (ao programa software)
    var ano = data.getFullYear() //puxando o ano real
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se o valor de fano for igual a 0 ou maior do que o ano real esse código ira definir com resposta inválida e aplicara um ERRO na tela.
        window.alert('[ERRO] Verifique os dados e tente novamente!') // mensagem que ira aparecer ao usúario caso a resposta seja invalida
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ' '
        var img = document.createElement('img') //criando uma tag img sem ultilizar o HTML
        img.setAttribute('id', 'foto') //add um id a tag criada acima sem utilizar o HTML
        if (fsex[0].checked) { // fsex [0] quer dizer o primeiro fsex que no caso seria homem 
            gênero = 'Homem'
            if (idade >=0 && idade < 10) { // se a idade for maior que 0 e menor que 10 é uma criança
                //criança
                img.setAttribute('src', 'homem_criança.jpg')
            } else if (idade < 21) { // se a idade for maior que 10 e menor que 21 é um adolecente
                //jovens
                img.setAttribute('src', 'homem_adolecente.jpg')
            } else if (idade < 50) { // se a idade for maior que 21 e menor que 50 é um adulto 
                //adulto
                img.setAttribute('src', 'homem_adulto.jpg')
            } else { // se a idade for acima de 50 é um idoso 
                //idoso
                img.setAttribute('src', 'homem_velho.jpg')
            }
        } else if (fsex[1].checked) { //fsex [1] quer dizer o primeiro fsex que no caso seria mulher
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'Mulher criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'Mulher adolecente.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Mulher adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'Mulher coroa.jpg')
            }
        }
        res.style.textAlign = 'center' //alinhando ao centro o res.inner... abaixo
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` // resposta ao usúario 
        res.appendChild(img) //para aparecer a imagem na tela 
    } 
}