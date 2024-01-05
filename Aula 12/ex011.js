var idade = 66
console.log (`Vocês tem ${idade} anos.`)
if (idade < 16) { // Se for menor que 16 
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { // Se for menor que 18 ou maior que 65 
    console.log('Voto opcional')
} else { // De resto 
    console.log ('Voto Obrigatório')
}