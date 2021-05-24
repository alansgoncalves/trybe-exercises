const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


// Exercicios:

// 1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClassTech(element) {
  element.setAttribute('class', 'tech');
}

addClassTech(divUm);




// 2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

function changeText(event) {
  const techClassElement = document.querySelector('.tech')
  techClassElement.innerText = input.value;
}

input.addEventListener('keyup', changeText);  //evento keyup insere o a ltra do texto após soltar a tecla do teclado.




// // 3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// // 3.1. Que tal redirecionar para seu portifólio?

function openPageOnDblcLick(event) {
  const url = 'https://alansgoncalves.github.io/portfolio/'
  window.location = url; // window.location usado para redirecionar para a página  
}

myWebpage.addEventListener('dblclick', openPageOnDblcLick)




// // 4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

function changeColorOnMouseOver(event) {
  event.target.style.color = 'darkblue';
}
myWebpage.addEventListener('mouseover', changeColorOnMouseOver);


function changeColorOnMouseLeave(event) {
  event.target.style.color = 'grey';
}
myWebpage.addEventListener('mouseleave', changeColorOnMouseLeave);



// // Segue abaixo um exemplo do uso de event.target:
function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// // Não precisa passar o parâmetro dentro do addEventListener. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'divUm'.