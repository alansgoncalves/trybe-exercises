import React from 'react'
import './App.css';

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log()

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
function handleClick() {
  console.log('The world is yours!')
}

function handleClick2() {
  console.log('My country')
}

function handleClick3() {
  console.log('Scarface')
}

class App extends React.Component {
  render() { 
    return (
      <div>
    <button onClick={handleClick}>Button 1</button>
    <button onClick={handleClick2}>Button 2</button>
    <button onClick={handleClick3}>Button 3</button>
    </div>
    );
  }
}
 
export default App;

