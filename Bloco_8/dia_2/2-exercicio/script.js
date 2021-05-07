const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// Dica: use a função find, que retorna o primeiro elemento que ela encontrar de uma lista

function authorBornIn1947() {

// 1. informo o nome da lista (books) e a função find().
// 2. defino o nome 'value' para o callback chamar as informações da lista (author e birthyear)
// 3. A callback 'value' retorna true se value.author.birthYear === 1947
 return books.find(value => value.author.birthYear === 1947)

// // 4. o ano sendo true, peço para a função trazer o nome do autor
  .author.name

}
console.log(authorBornIn1947());





// 2. Retorne o nome do livro de menor nome.

// Dica: use a função forEach .

function smallerName() {

  let nameBook;

  books.forEach((value2) => {
    if(!nameBook || value2.name.length < nameBook.length) {
      nameBook = value2.name;
    }
  });
  return nameBook;
}

console.log(smallerName());


assert.strictEqual(authorBornIn1947(), 'Stephen King');
assert.strictEqual(smallerName(), 'Duna');
