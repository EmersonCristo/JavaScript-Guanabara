let valores = [8 , 1 , 7 , 4 , 2 , 9 ]
valores.sort() // Para colocar de forma crescente
// console.log(valores)

// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])          Modo burro de se fazer
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

// for (let pos=0; pos < valores.length; pos++) {
    // console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // valores [pos] o valor que cada pos esta consultando 
// }

for(let pos in num) { // Para cada posição na variavel composta
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Ira mostrar o num pos
}