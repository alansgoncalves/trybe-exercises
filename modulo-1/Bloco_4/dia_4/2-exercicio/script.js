// Como utilizar o for in dentro de objetos e arrays:

// Vamos criar um objeto pizzas com algumas propriedades:

let pizzas = {
  sabor: "Palmito",
  preco: 39.90,
  bordaCatupiry: true,
};

// Agora vamos criar um for in (laço for para trabalhar com nosso objeto pizzas) para varrer todo o objeto pizzas e executar as ações. Temos que criar um variável dentro do for:
// for (let key in pizzas) {  

// para imprimir as propriedades do objeto pizzas:
//   console.log(key);
// }

// Resultado:

// sabor
// preco
// bordaCatupiry



// for (let key in pizzas) {
  
// para imprimir 3 vezes o objeto completo com seu valores
//     console.log(pizzas);
//   }

// Resultado:

// { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
// { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
// { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }



// for (let key in pizzas) {  

// para imprimir utilizando dot notation e propridade
//   console.log(pizzas.preco);
// }

// Resultado:

// 39.9
// 39.9
// 39.9



// for (let key in pizzas) {  

  // para imprimir utilizando colchetes
  //   console.log(pizzas['bordaCatupiry']);
  // }
  
// Resultado:

// true
// true
// true



// Dentro do for in, conseguimos passar por todas as propriedades do objeto pizzas e pegar os valor de cada uma delas:

// for (let key in pizzas) {  
//     console.log(pizzas[key]);
//   }

  // Resultado:

// Palmito
// 39.9
// true



// Conseguimos trabalhar com for in dentro de arrays

let pizzasDoces = ['chocolate', 'banana', 'morango'];

// for (let key in pizzasDoces) {
//   console.log(key);
// }

// Resultado:

// 0
// 1
// 2


// Acessando pelo nome da variavel dentro de console.log

// for (let key in pizzasDoces) {
//   console.log(pizzasDoces);
// }

// Resultado:

// [ 'chocolate', 'banana', 'morango' ]
// [ 'chocolate', 'banana', 'morango' ]
// [ 'chocolate', 'banana', 'morango' ]


// Podemos também exibir um indice específico do array pizzasDoces:

// for (let key in pizzasDoces) {
//   console.log(pizzasDoces[key]);
// }

// Resultado

// chocolate
// banana
// morango


// Podemos também exibir o indice correspondente ao valor de cada posição do array pizzasDoces:

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key]);
}

// Resultado

// 0 chocolate
// 1 banana
// 2 morango