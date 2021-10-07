// Exercicio 1 - Crie uma array drinks com os seguintes obejtos dentro dela e uma 
// rota GET /drinks que retorna a lista de bebidas:

// const express = require('express');
// const app = express();

// const drinks = [
//   { id: 1, name: 'Refrigerante Lata', price: 5.0 },
//   { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
//   { id: 3, name: 'Suco 300ml', price: 4.0 },
//   { id: 4, name: 'Suco 1l', price: 10.0 },
//   { id: 5, name: 'Cerveja Lata', price: 4.5 },
//   { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
// ];

// Exercicio 2 - Modifique tanto a rota de bebidas como de receitas para retornar 
// a lista ordenada pelo nome em ordem alfabética:

// app.get('/', (req, res) => {
//   drinks.sort((a, b) => a.name > b.name ? 1 : -1) //Lógica para ordenar o name em ordem alfabética
//    res.send(drinks)
//  })

// app.listen(3000, () => console.log(`App ouvindo a porta 3000`))


// Resultado:
// [
//   {
//       "id": 6,
//       "name": "Agua Mineral 500 ml",
//       "price": 5
//   },
//   {
//       "id": 5,
//       "name": "Cerveja Lata",
//       "price": 4.5
//   },
//   {
//       "id": 2,
//       "name": "Refrigerante 600ml",
//       "price": 8
//   },
//   {
//       "id": 1,
//       "name": "Refrigerante Lata",
//       "price": 5
//   },
//   {
//       "id": 4,
//       "name": "Suco 1l",
//       "price": 10
//   },
//   {
//       "id": 3,
//       "name": "Suco 300ml",
//       "price": 4
//   }
// ]

//Exercicio 3 - Crie uma rota GET /drink/:id para retornar uma bebida pelo id:

// const express = require('express');
// const app = express();

// const drinks = [
//   { id: 1, name: 'Refrigerante Lata', price: 5.0 },
//   { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
//   { id: 3, name: 'Suco 300ml', price: 4.0 },
//   { id: 4, name: 'Suco 1l', price: 10.0 },
//   { id: 5, name: 'Cerveja Lata', price: 4.5 },
//   { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
// ];

// app.get('/drink/:id', (req, res) => {
//   const { id } = req.params
//   const dados = drinks.find((p) => p.id === parseInt(id))
//   drinks.sort((a, b) => a.name > b.name ? 1 : -1)
//    res.status(200).json(dados)
//  });

// app.listen(3000, () => console.log(`App ouvindo a porta 3000`))

// http://localhost:3000/drink/4
// Resultado
// {
//   "id": 4,
//   "name": "Suco 1l",
//   "price": 10
// }


// Exercicio 4 - Modifique o código da nossa rota para que ela receba um 
// terceiro parâmetro através de query string com o atributo minPrice e 
// modifique o filter para trazer apenas os receitas onde o valor da receita
// seja maior ou igual ao o valor enviado como parâmetro, mantendo os filtros 
// anteriores:

// const express = require('express');
// const app = express();

// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 25.0, waitTime: 25 },
//   { id: 4, name: 'Strogonoff', price: 18.0, waitTime: 15 },
//   { id: 5, name: 'Carne Cozida', price: 21.0, waitTime: 22 },
// ];

// app.get('/recipe/search', (req, res) => {
//   const { name, maxPrice } = req.query
//   const dados = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
//    res.status(200).json(dados)
//  });

// app.listen(3000, () => console.log(`App ouvindo a porta 3000`))

// http://localhost:3000/recipe/search?name=Macarr%C3%A3o&maxPrice=30
//Resultado:
// [
//   {
//     "id": 3,
//     "name": "Macarrão com molho branco",
//     "price": 25,
//     "waitTime": 25
//   }
// ]

// Exercício 5 - Implemente uma rota /drinks/search que permita pesquisar
// pelo atributo name usando query string.

const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/drink/search', (req, res) => {
  const { name } = req.query
  const dados = drinks.filter((r) => r.name.includes(name));
   res.status(200).json(dados)
 });

app.listen(3000, () => console.log(`App ouvindo a porta 3000`))