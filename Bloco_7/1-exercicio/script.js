// Parte I - var, let e const


// ------CONST-LET-CONST------//

function userInfo() {
  var userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();

// ------CONST-LET-CONST------//

if (true) {
  // inicio do escopo do if
  var userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

// ------CONST-LET-CONST------//

const userName = "Isabella";
const userName = "Lucas";
console.log(userName); // Resultado: Lucas

// ------CONST-LET-CONST------//

const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition

// ------CONST-LET-CONST------//

var userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

// ------CONST-LET-CONST------//

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro


// Parte II - template literals

// ------TEMPLATE LITERALS------//

const myName = "Isabella"
console.log(`Welcome ${myName}!`);

// ------TEMPLATE LITERALS------//

Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')



// Parte III - arrow functions

// ------ARROW FUNCTIONS------//

const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// ------ARROW FUNCTIONS------//

const printName = () => {
  const myName = "Lucas";
  return myName;
  
}
console.log(printName());

// ------ARROW FUNCTIONS------//

const printName = () => "Lucas";
console.log(printName());

// ------ARROW FUNCTIONS------//

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// ------ARROW FUNCTIONS------//

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));



// Parte IV - ternary operator

// ------TERNARY OPERATOR------//

const valor = (1 > 2) ? ('true') : ('false');

console.log(valor);


// ------TERNARY OPERATOR------//

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:

const trueExpression = (1 + 1 === 2) ? `isso é mentira` : `isso é verdade`;
console.log(trueExpression) // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é mentira` : `isso é verdade`;
console.log(falseExpression) // isso é mentira

// ------TERNARY OPERATOR------//

const expression1 = (2 * 2 === 4) ? `isso é mentira` : `isso é verdade`;
console.log(expression1)

const expression2 = (2 * 3 === 4) ? `isso é verdade` : `isso é mentira`;
console.log(expression2)



// const checkIfElse = (age) => {
//   if (age >= 18) {
//     return `Você tem idade para dirigir!`;
//   } else {
//     return `Você ainda não tem idade para dirigir...`;
//   }
// };
// console.log(checkIfElse(11));



// const checkTernary = (age) => (
//   age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
// );
// console.log(checkTernary(11));


