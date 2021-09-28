const readFile = require('readline-sync');

function logResultado(numero, resposta) { // Terceiro passo: É feito a comparação do número com a resposta
  if (numero !== resposta) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`);
  }
  return console.log('Parabéns, número correto!');
}

function runGame() {
  const numero = parseInt(Math.random() * 10); //Primeiro passo: gera número aleatório de 0 a 10
  
  const resposta = readFile.questionInt( // Segundo passo: usuário digita número em seguida a função logResultao é chamada
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando: ');
    logResultado(numero, resposta);

  const novamente = readFile.question( //Quarto passo: Após resultado, pergunta se quer jogar novamente
    'Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) '
  );
  if (novamente !== 's') return console.log('OK, até a próxima!');
  runGame();
}

runGame();


module.exports = {
  numero
};