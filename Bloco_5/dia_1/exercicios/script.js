// Parte 1

// document.getElementById("paragraph");   // para alterar a cor do id=paragraph
// paragraph.style.color = "red";

// document.getElementById("page-title").innerText = "Filme favorito: Scarface";  // para altera o texto do id=page-title

// document.getElementById("second-paragraph").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

// document.getElementById("subtitle").innerText = "Tony Montana";


// Parte 2

// Veja que ele altera somente o primeiro texto que ele encontra:
// document.getElementsByClassName("text")[0].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";


// para alterar todos os textos de uma só vez, temos que armazenar o getElementsByClassName dentro de uma variável e fazer um for loop:
let paragrafos = document.getElementsByClassName("text");

for (let index = 0; index < paragrafos.length; index += 1) {
  paragrafos[index].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
}

// Para alterar a cor de fundo de cada paragrafo:
document.getElementsByClassName('text')[1].style.backgroundColor = "blue";
document.getElementsByClassName('text')[0].style.backgroundColor = "pink";


// recuperar subtitulo pela tag:
document.getElementsByTagName('h4')[0].innerText = "Tony Montana";

