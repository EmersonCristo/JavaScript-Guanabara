var agora = new Date() //Adicionando tempo do cumportador sendo utilizado pelo usuario 
var diaSem = agora.getDay() // puxando do new date, o dia real 

/*diaSem = 9*/ // Atribuindo qual o dia da semana caso eu quisesse

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
    */
    
    console.log(diaSem) // Aparecera no Node o dia que sera atribuido abaixo pelo Switch

    switch(diaSem) { // switch é usado para condições mais precisas e repetitivas
        case 0:
            console.log('Domingo')
            break
        case 1:
            console.log('Segunda')
            break
        case 2:
            console.log('Terça')
            break
        case 3:
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sábado')
            break
        default:
            console.log('[ERRO] Dia inválido!')
            break
    }

