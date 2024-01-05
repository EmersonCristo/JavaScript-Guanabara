let num = [2 , 1 , 3 , 5 , 4]
num.push(9) // Para adicionar o 9 ao final dos elementos
num.sort() // Para colocar os elementos organizados de forma crescente 
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // length é para mostrar quantos indices a na variavel 
console.log(`O primeiro valor do vetor é ${num[0]}`) // lembrando que em linguagens de programação as contas começam com o numero 0 e não o numero 1
let pos = num.indexOf(5)
if (pos == -1) { // se o valor que eu estou procurando não existe na variavel, ira aparecer -1 em js, para não aparecer -1 e aparecer que o valor nao foi encontrado adicionamos essa condição no código  
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor esta na posição ${pos}`) // pesquisando em que chave esta o valor 4, lembrando que o push e o sort interefe na opereção!
}
