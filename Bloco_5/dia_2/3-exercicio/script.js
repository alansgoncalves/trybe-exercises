//1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body:


const tagh1 = document.createElement('h1'); //Primeiro, criamos uma variável para atibuir a propriedade criar document.createElement + ('tag');  
tagh1.innerText = 'Exercício 5.2 - JavaScript DOM'; // Em seguida chamamos a variável.innertext para adicionar o texto
document.body.appendChild(tagh1); //Em seguida, utilizamos a tag document.body e appendChild('variavel') para adicionar nova tag



//2. Adicione a tag div com a classe main-content como filho da tag body ;

const tagdiv2 = document.createElement('div'); //Primeiro, criamos uma variável para atibuir a propriedade criar document.createElement + ('tag');  
tagdiv2.className = 'main-content';  // Em seguida chamamos a variável.className para adicionar o nome da classe
document.body.appendChild(tagdiv2);  // Em seguida, utilizamos a tag document.body e appendChild('variavel') para adicionar nova tag



//3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;

const tagdiv3 = document.createElement('div'); //Primeiro, criamos uma variável para atibuir a propriedade criar document.createElement + ('tag');  
tagdiv3.className = 'center-content'; // Em seguida chamamos a variável.className para adicionar o nome da classe
tagdiv2.appendChild(tagdiv3); // Como o exercicio pede para que a div seja filho da div main-content, temos que informar a var tagdiv2.appendChild('var atual') para adicionar nova tag



//4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;

const tagp = document.createElement('p'); //Primeiro, criamos uma variável para atibuir a propriedade criar document.createElement + ('tag');
tagp.innerText = 'morando no wonderfull'; //Em seguida chamamos a variável.innertext para adicionar o texto
tagdiv3.appendChild(tagp); // Como o exercicio pede para que a div seja filho da div center-content, temos que informar a var tagdiv2.appendChild('var atual') para adicionar nova tag



//5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;

const tagdiv4 = document.createElement('div'); //Primeiro, criamos uma variável para atibuir a propriedade criar document.createElement + ('tag');
tagdiv4.className = 'left-content'; // Em seguida chamamos a variável.className para adicionar o nome da classe
tagdiv2.appendChild(tagdiv4); // Como o exercicio pede para que a div seja filho da div main-content, temos que informar a var tagdiv2.appendChild('var atual') para adicionar nova tag



//6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;

const tagdiv5 = document.createElement('div'); //Primeiro, criamos uma variável para atibuir a propriedade criar document.createElement + ('tag');
tagdiv5.className = 'right-content'; // Em seguida chamamos a variável.className para adicionar o nome da classe
tagdiv2.appendChild(tagdiv5); // Como o exercicio pede para que a div seja filho da div main-content, temos que informar a var tagdiv2.appendChild('var atual') para adicionar nova tag



//7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;

const picture = document.createElement('img'); //Primeiro, criamos uma variável para atribuir a propriedade criar document.createElement + ('tag');
picture.className = 'small-image'; //Em seguida chamamos a variável.className para adicionar o nome da classe
picture.src = 'https://picsum.photos/200' //Agora cahamamos a variável.src para inserirmos o enderço da imagem
tagdiv4.appendChild(picture); // Como o exercicio pede para que a div seja filho da div left-content, temos que informar a var tagdiv4.appendChild('var atual') para adicionar a imagem



//8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;

const values = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']; // criamos a variavel com range de números
const ulList = document.createElement('ul'); // Em seguida, criamos uma variável para atribuir a propriedade criar document.createElement + ('ul');
for (let index = 0; index < values.length; index += 1) { //laço for para passar por cada elemento do array
  let liList = document.createElement('li'); //Em seguida, criamos uma variável para atribuir a propriedade criar document.createElement + ('li');
  liList.appendChild(document.createElement(values[index])); //inserir li para elemento do array
  ulList.appendChild(liList); // inserir lista ul
}
tagdiv5.appendChild(ulList); // Como o exercicio pede para que a div seja filho da div right-content, temos que informar a var tagdiv5.appendChild('ulList') para adicionar a lista



//9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

for (let index1 = 0; index1 < 3; index1 += 1) { // laço for para criar 3 tags h3

  let tagH3 = document.createElement('h3'); // Em seguida, criamos uma variável para atribuir a propriedade criar document.

  tagdiv2.appendChild(tagH3); // Como o exercicio pede para que as tags h3 sejam filhas da div main-content, temos que informar a var tagdiv2.appendChild('tagH3') para adiciona-las
}




// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 10. Adicione a classe title na tag h1 criada;

const tagTitle = document.querySelector('h1'); //Primeiro, criamos uma variável para atribuir a propriedade criar document.querySelector + ('tag');
tagTitle.className = 'title'; //Em seguida, inserimos a variável.className e o nome da classe




// 11. Adicione a classe description nas 3 tags h3 criadas;

const tagDesc = document.getElementsByTagName('h3'); //Primeiro, criamos uma variável para atribuir a propriedade document.getElementsByTagName e tag
for (let index2 = 0; index2 < 3; index2 += 1) { //laço for adicionar a classe nas três tags h3
  tagDesc[index2].className = 'description'; //Em seguida, inserimos a variável[index2].className e o nome da classe
}




// 12. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild():

tagdiv2.removeChild(tagdiv4); // Primeiro informamos a variável referente a main-content.removeChild e variável referente a (left-content);




// 13. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div:

tagdiv5.style.marginRight = 'auto'; // Primeiro informamos a variável referente a right-content.style e marginRight auto para centralizar




// 14. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

tagdiv3.style.background = 'green'




// 15. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ulList.removeChild(ulList.lastChild); //para remover elemento 9, insira a variavel ulList referente a lista não ordenada e entre parenteses (ulList.lastChild) para que seja removido o último intem da lista
ulList.removeChild(ulList.lastChild); //para remover elemento 10, insira a variavel ulList referente a lista não ordenada e entre parenteses (ulList.lastChild) para que seja removido o último intem da lista