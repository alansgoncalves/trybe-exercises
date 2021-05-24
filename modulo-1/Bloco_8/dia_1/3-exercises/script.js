// 1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (register) => {  //3. colocamos register como parametro da função newEmployees
  const employees = {   //1. cria const que recebe os objetos id1, id2, id3
    id1: register('Pedro Guerra'), //2.  aqui, o valor de id1 vai chamar a função register que tem parametro o nome da pessoa
    id2: register('Luiza Drumond'), //2.  aqui, o valor de id2 vai chamar a função register que tem parametro o nome da pessoa
    id3: register('Carla Paiva'), //2.  aqui, o valor de id3 vai chamar a função register que tem parametro o nome da pessoa
  }
  return employees;
};

const register = (fullName) => {  //4. cria const para receber como parametro o nome completo da pessoa: fullName
  const email = fullName.toLowerCase().split(' ').join('_'); //5. vou criar constante que vai receber o parametro fullName e transformar em email
  return {fullName, email: `${email}@trybe.com`}
}
console.log(newEmployees(register));

//RESULTADO:
// {
//   id1: { fullName: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
//   id2: { fullName: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
//   id3: { fullName: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
// }




// 2. Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numberChecker = (myNumber, gameNumber) => myNumber === gameNumber;   // 4. cria função que compara os dois parametros (myNumber === gameNumber

const lotteryResult = (myNumber, gameNumber) => {   // 1. cria const que recebe dois parametros (myNumber, gameNumber)
  const generateNumber = Math.floor((Math.random() * 5) + 1);   // 2. cria const para gerar número aleatório de 1 a 5 

  return gameNumber(myNumber, generateNumber) ? 'Lucky day, you won!' : 'Try Again!';   // 3. insira um return com template literals comparando seu número com o sorteado
};

console.log(lotteryResult(2, numberChecker));