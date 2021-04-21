// coloque seus conhecimentos de getElementBy e querySelector em prática!!

// list Urgente e Importante

const urg = document.getElementById('urgent');

const newList = document.createElement('li');
newList.textContent = 'Aprender JavaScript pra ontem';

const newList2 = document.createElement('li');
newList2.textContent = 'Se aprofundar em Elementos DOM';

const newList3 = document.createElement('li');
newList3.textContent = 'Se aprofundar em CSS!!';

urg.appendChild(newList);
urg.appendChild(newList2);
urg.appendChild(newList3);


// lista Urgente e Não-Importante

const noImportant = document.getElementById('not-important');

const newList4 = document.createElement('li');
newList4.textContent = "Revisar GIT e GitHub"

const newList5 = document.createElement('li');
newList5.textContent = "Revisar HTML"

noImportant.appendChild(newList4);
noImportant.appendChild(newList5);


// Não-Urgente e Importante

const important = document.getElementById('important');

const newList8 = document.createElement('li');
newList8.textContent = "Pagar o banco Itaú"

const newList9 = document.createElement('li');
newList9.textContent = "Pagar minha mãe e irmã"

important.appendChild(newList8);
important.appendChild(newList9);


// lista Não-Urgente e Importante

const notUrgent = document.getElementById('not-urgent');

const newList6 = document.createElement('li');
newList6.textContent = "Se preocupar com pequenas coisas"

const newList7 = document.createElement('li');
newList7.textContent = "Se preocupar com coisas do passado"

notUrgent.appendChild(newList6);
notUrgent.appendChild(newList7);

console.log(document.querySelector('#urgent'));
console.log(document.querySelector('#not-important'));
console.log(document.querySelector('#important'));
console.log(document.querySelectorAll('.no-emergency-tasks #not-urgent'));
