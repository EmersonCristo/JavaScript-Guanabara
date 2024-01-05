var agora = new Date() //Aqui estou adicionando ao código as datas e hrs Reai, do computador que o usúario está utilizando
var hora = agora.getHours() //Hora real
var dia = agora.getDay() // Dia real 
var min = agora.getMinutes() // Minutos reais
var ano = agora.getFullYear() // Ano real 
var mes = agora.getMonth() //Mês real 
console.log (`Agora são exatemente ${hora}hrs e ${min}minutos!, do dia ${dia}, do mês ${mes}, do ano de ${ano}! Boa sorte Emerson, torço por você! Do Emerson do passado para o Emerson do futuro. Compra o Jetta!`)
if (hora <= 5) {
    console.log ('Boa madrugada!')
} else if (hora <= 12) {
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log ('Boa tarde!')
} else {
    console.log ('Boa noite!')
} 
console.log ('Esse seu código foi feito as 19:18 em 31/07/2023!') //carta para o futuro