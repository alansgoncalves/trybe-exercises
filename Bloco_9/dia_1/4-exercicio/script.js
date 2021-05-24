const appendJoke = (joke) => {
  const li = document.createElement('li');
  const ul = document.querySelector('ul');

  li.innerText = joke;
  ul.appendChild(li);
}


// Obter uma piada da API icanhazdadjoke.com e adicionar
// ao HTML utilizando a função appendJoke

function fetchJoke() {
  const param = { headers: { Accept: 'application/json' } };

  // json = javascript object notation

  fetch('https://icanhazdadjoke.com/search?term=spider', param)
    .then( // quando a promise deu sucesso 
      (response) => {
        response.json()
          .then((json) => {
            appendJoke(json.results[0].joke);
          });
      });
}

window.onload = () => fetchJoke();