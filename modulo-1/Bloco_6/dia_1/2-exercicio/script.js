const data = document.querySelector('#initial-date');
const allInputs = document.getElementsByTagName('input');
const clearAll = document.getElementById('clean');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#e-mail');

const states = document.querySelector('#state');
const allStates = ['UF', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

for (let index = 0; index < allStates.length; index += 1) {
  const newUf = document.createElement('option');
  newUf.innerText = allStates[index];
  states.appendChild(newUf);
}


// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.

// Caso alguma das condições seja inválida no momento do envio do formulário, exibir uma mensagem de erro contextualizada:

function registerDate() {
  let valor = data.value.split('');
  if (valor.length != 10) {
    return alert ('Digitar data no formato dd/mm/yyyy');
  }
  if (valor[2] !== '/' || valor[5] !== '/') {
    return alert('Use / para separar as datas');
  }
  if (valor[0] + valor[1] <= 0 || valor[0] + valor[1] > 31) {
    return alert('Digite dia entre 01 a 31'); 
  } 
  if (valor[3] + valor[4] <= 0 || valor[3 + valor[4] > 12]) {
    return alert('Digite mês entre 01 a 12');
  }
  if (valor[6] + valor[7] + valor[8] + valor[9] < 2021) {
    return alert('Digite ano atual ou maior');
  }
}

send.addEventListener('click', () => {
  registerDate();
});

// Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.

clearAll.addEventListener('click', () => {
  for (let index2 = 0; index2 < allInputs.length; index2 += 1) {
    allInputs[index2].value = '';
  }
  for (let index3 = 0; index3 < allInputs.length; index3 += 1) {
    allInputs[index3].value = '';
  }
});

// Execute as validações que foram pedidas ao longo da montagem do formulário:

const checkName = () => {
  if (fullName.length > 40 || fullName === 0) {
    return alert ('Inserir nome com até 40 letras');
  }
}

const checkEmail = () => {
  if (email.value.search('@') < 0 || email.value.search('.com') < 0) {
    return alert ('Informe um e-mail válido')
  }
}

