// First-Class Functions

//Segundo esse modelo de função, passamos como parâmetro os seguintes tipos de dados: strings , numbers , booleans , objects e arrays . Veja o exemplo abaixo:

const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For sale' : 'Not for sale',
});

console.log(product('Computador', 3000, false));

// RESULTADO:
// { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }



// Higher Order Functions

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// RESULTADO:
// 0
// 1
// 2
// 3
// 4
// 5


// Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat , sendo:

// 1. Um número até que ponto gostaríamos de testar, neste caso 3 ;
// 2. Nossa ação que será executada quando chamada action(count) na nossa função repeat , neste caso uma função para testar nossos números.

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(10, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// RESULTADO:
// 0 is even
// 2 is even
// 4 is even
// 6 is even
// 8 is even
// 10 is even





// Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if (number % 2 > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// RESULTADO:
// 0 is even
// 2 is even
// 1 is odd
// 3 is odd



//Aula síncrona dia 30/abr


const person = {
  name: 'Carol',
  lastName: 'Santos',
  greet: (greetingFunction) => greetingFunction(),
};

const greetingPeople = (person) => {
  console.log(`Olá, ${person.name} ${person.lastName}, como vai você?`);
};

greetingPeople(person);
const goodMorning = () => {
  console.log('Está tudo certo')
}

person.greet(goodMorning);
const badMoodGreeting = () => {
  console.log('Não fale comigo...');
}

const saida =badMoodGreeting();

// RESULTADO:
// Olá, Carol Santos, como vai você?
// Está tudo certo
// Não fale comigo...
