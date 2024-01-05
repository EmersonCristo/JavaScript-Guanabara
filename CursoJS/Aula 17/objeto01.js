let amigo = {nome:'José', // criando um vetor (objeto)
sexo: 'M',
peso: 85.4,
engordar(p=0){ //variável criada dentro do vetor chamada engordar se eu não atribuir um peso ao engordar ele sera igual a 0 
    console.log('Engordou')
    this.peso += p // this é uma linguagem direcionada a objetos, (isso eu tenho que estudar mais pra frente)
}}

amigo.engordar(2) // atribui que engordara em 2 kg
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`) 