function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) { // variavel c = 5, enquanto ela for maior que 1 ela reduzira 1(c--)
        fat *= c // Fatorial recebera vezes o c
    }
    return fat 
}

console.log(fatorial(5))

// Fatorial 5! = 5 x 4 x 3 x 2 x 1 = 120