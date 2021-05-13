// // Promisses

// // As promises se comportam de forma muito parecida com as funções que já conhecemos, mas existem 3 pontos de destaque das Promises em relação à outras funções:

// // 1. As Promises são assíncronas , ou seja, elas tem um espaço especial para sua execução sem que travem o fluxo de outras funções.
// // 2. As Promises têm "superpoderes", isto é, funções extras que facilitam o controle do fluxo assíncrono.
// // 3. As Promises são construídas de um forma distinta: para criar uma nova Promise, usamos um Construtor .


// // vamos passo-a-passo construindo uma Promise para que você entenda cada tijolinho que forma nossa superfunção. Vamos lá?!


// //Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso. Nosso programa ficaria assim:

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if(number <= 5) {
//     return reject(console.log(`Que fracasso! Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso! Nosso número foi ${number}`));
// });

// // RESULTADO:
// // Que sucesso! Nosso número foi 10

// //Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error !




// // Gestores de fluxo

// // Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso! Nosso número foi ${number}`));
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg));

// // RESULTADO:
// // Que sucesso! Nosso número foi 9


// // Ok, mas o erro continua acontecendo. O que podemos fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random()* 11);

//   if (number <= 5) {
//     return reject(number);
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso! nosso número foi ${number}`)
// .then(msg => console.log(msg))
// .catch(number => console.log(`Que fracasso! Nosso número foi ${number}`));

// RESULTADO:
// Que sucesso! nosso número foi 10
// Que fracasso! Nosso número foi 1

// Se executarmos o código acima, vamos ver que o erro anterior desapareceu, pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve , o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna.


const fetch = require('node-fetch');

async function verifiedFetch(url) {
  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r.value);
  }
  throw new Error('endpoint não existe');
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");
