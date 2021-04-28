// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Modifique a estrutura da função para que ela seja uma arrow function .

const testingScope = (escopo) => {
  let scope = 'Não devo ser utilizada fora do meu escopo (if)';
  scope = scope + ' ótimo, fui utilizada no escopo !';
    if(escopo === true) {
      console.log(scope)
    } else {
      let scope2 = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(scope2)
    }
}
testingScope(false);

// Modifique as concatenações para template literals .

const testingScope = (escopo) => {
  let scope = 'Não devo ser utilizada fora do meu escopo (if)';
  scope = `${scope} ótimo, fui utilizada no escopo !`;
    if(escopo === true) {
      console.log(`${scope}`);
    } else {
      let scope2 = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(`${scope2}`);
    }
}
testingScope(true);




// 2. Faça uma função que retorne o array oddsAndEvens em ordem crescente:

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(oddsAndEvens);

// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);

//https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Por%20padr%C3%A3o%2C%20o%20m%C3%A9todo%20sort,para%20determinar%20as%20suas%20ordens.
