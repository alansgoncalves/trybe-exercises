// Parte 1

// 1 . Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("page-title").innerText = "Filme favorito: Scarface";

// 2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById("second-paragraph").innerText = "Lorem ipsum dolor sit";

// 3. Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = "Tony Montana";


// Parte 2

// 1. Adicione ao seu HTML uma classe com alguns estilos para os seus dois parágrafos.
document.getElementById("paragraph");   // para alterar a cor do id=paragraph
paragraph.style.color = "red";

// Veja que ele altera somente o primeiro texto que ele encontra:
document.getElementsByClassName("text")[0].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

// 2. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
// Para alterar todos os textos de uma só vez, temos que armazenar o getElementsByClassName dentro de uma variável e fazer um for loop:
let paragrafos = document.getElementsByTagName('p');

for (let index = 0; index < paragrafos.length; index += 1) {
  paragrafos[index].innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
}

// 3. Altere algum estilo do primeiro deles.
// Para alterar a cor de fundo de cada paragrafo:
document.getElementById('paragraph').style.backgroundColor = "blue";
document.getElementById('second-paragraph').style.backgroundColor = "pink";


// 4. Recuperar subtitulo pela tag:
document.getElementsByTagName('h4')[0].innerText = "Subtítulo";

