// Exercicio 1 - Crie uma array drinks com os seguintes obejtos dentro dela e uma 
// rota GET /drinks que retorna a lista de bebidas:

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

// Exercicio 2 - Modifique tanto a rota de bebidas como de receitas para retornar 
// a lista ordenada pelo nome em ordem alfabética:

app.get('/', (req, res) => {
  drinks.sort((a, b) => a.name > b.name ? 1 : -1)
   res.send(drinks)
 })

app.listen(3000, () => console.log(`App ouvindo a porta 3000`))


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