function parimp(n) {
    if (n%2 == 0) { // se n dividir pra 2 e der o resultado zero, ele é par, se não é impar
        return 'Par!'
    } else {
        return 'Impar!'
    }
} 

console.log(parimp(5)) // Atribuindo ao valor do parâmetro