// Bloco 4.4 - Objetos e funções

// Abaixo temos um objeto 'singer' com todas as suas propriedades:

// let singer = {
//     name: 'Milton',
//     lastName: 'Nascimento',
//     nickName: 'Bituca',
//     age: 77,
//     bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas']
// }


// Como acessar os valores desse objeto, ou de cada chave?
// Através de duas formas: 

// 1. Anotação por ponto . (dot notation)

// console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos. ');

//Resultado:
// O cantor Milton Nascimento possui 77 anos. 


// 2. Anotação por aspas [nome da propriedade] . (bracket notation)

// console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos. ');

//Resultado:
// O cantor Milton Nascimento possui 77 anos. 


// Para atribuir mais valores ao objeto:

// singer['fullName'] = singer.name + ' ' + singer.lastName;

// console.table(singer);

// Resultado
// ┌────────────┬─────────────┬────────────────────┬─────────┬─────────────────────┐
// │  (index)   │      0      │         1          │    2    │       Values        │
// ├────────────┼─────────────┼────────────────────┼─────────┼─────────────────────┤
// │    name    │             │                    │         │      'Milton'       │
// │  lastName  │             │                    │         │    'Nascimento'     │
// │  nickName  │             │                    │         │      'Bituca'       │
// │    age     │             │                    │         │         77          │
// │ bestAlbuns │ 'Travessia' │ 'Clube da esquina' │ 'Minas' │                     │
// │  fullName  │             │                    │         │ 'Milton Nascimento' │
// └────────────┴─────────────┴────────────────────┴─────────┴─────────────────────┘

// Agora vamos acrescentar mais informações ao objeto como cidade e estado de nascimento:
// Vamos acrescentar o objeto bornInfo e dentro dele, outros 2 objetos:

// let singer = {
//     name: 'Milton',
//     lastName: 'Nascimento',
//     nickName: 'Bituca',
//     age: 77,
//     bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas'],
//     bornInfo: {
//         city: 'Rio de Janeiro',
//         state: 'RJ',
//     }
// }

// console.log('O cantor ' + singer.fullName + 'nasceu no estado do ' + singer.bornInfo.state);

//Resultado:
// O cantor Milton Nascimento nasceu no estado do RJ



// Se caso houver alguma propriedade com nomenclatura, como last-name por exemplo, temos que informar com aspas simples e dentro de chaves:

// let singer = {
//     name: 'Milton',
//     'last-name': 'Nascimento',
//     nickName: 'Bituca',
//     age: 77,
//     bestAlbuns: ['Travessia', 'Clube da esquina', 'Minas'],
//     bornInfo: {
//         city: 'Rio de Janeiro',
//         state: 'RJ',
//     }
// }

// console.log('O cantor ' + singer.name + ' ' + singer['last-name'] + ' nasceu no estado do ' + singer.bornInfo.state);




// Exercicio de fixação

// 1. Crie um objeto player contendo as variáveis listadas abaixo.

// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: { golden: 2, silver: 3 },
//   bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//   }


// 2. Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

//console.log('A jogadora ' + player.name + ' da ' + player.lastName + ' tem ' + player.age + ' anos.') 



// 3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

// let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];



// 4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// console.log('A jogadora ' + player.name + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.' )



// 5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

