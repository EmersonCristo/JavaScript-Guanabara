function Contar() {
    let ini  = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo= document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) // Pegando o numero digitado na var ini
        let f = Number(fim.value) // Pegando o numero digitado na var fim
        let p = Number(passo.value) // Pegando o numero digitado na var passo
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1 ')
            p = 1
        } 
        if (i < f) { // contegem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}	 ` // \u é utilizado para aplicar um emoji 
            }
            res.innerHTML += `\u{1F3C1}`
        } else { // contagem regressiva
            for(let c = i; c >=f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}