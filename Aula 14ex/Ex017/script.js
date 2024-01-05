function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') // criando opções dentro do botão 
            item.text = ` ${n} x ${c} = ${n*c}` // Número selecionado x Contador x Número vs contador
            item.value = `tab${c}` // Não util para o Js mas muito util se for utilizar outras linguagens
            tab.appendChild(item)
            c++
        }
    }
}