import React from 'react'
import './App.css';

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log()

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .

// function handleClick() {
//   console.log('The world is yours!')
// }

// function handleClick2() {
//   console.log('My country')
// }

// function handleClick3() {
//   console.log('Scarface')
// }

// class App extends React.Component {
//   render() { 
//     return (
//       <div>
//     <button onClick={handleClick}>Button 1</button>
//     <button onClick={handleClick2}>Button 2</button>
//     <button onClick={handleClick3}>Button 3</button>
//     </div>
//     );
//   }
// }
 
// export default App;



// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

// 4 - Garanta acesso ao objeto this na função que você declarou

// class App extends React.Component {
//   constructor() {
//     super()
//     this.handleClick = this.handleClick.bind(this)
//     this.handleClick2 = this.handleClick2.bind(this)
//     this.handleClick3 = this.handleClick3.bind(this)
//   }

// handleClick() {
//   console.log('The world is yours!', this)  //Acesso ao objeto this na função que você declarou
// }

// handleClick2() {
//   console.log('My country', this)
// }

// handleClick3() {
//   console.log('Scarface', this)
// }

// render() {
//   return (
//     <div>
//     <button onClick={this.handleClick}>Button 1</button>
//     <button onClick={this.handleClick2}>Button 2</button>
//     <button onClick={this.handleClick3}>Button 3</button>
//     </div>
//   )
// }

// }

// export default App;


// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! 

// class App extends React.Component {
//   constructor() {
//     super()
//     this.handleClick = this.handleClick.bind(this)

//     this.handleClick2 = this.handleClick2.bind(this)

//     this.handleClick3 = this.handleClick3.bind(this)

// // Primeiramente, defina um estado inicial para a contagem de cada botão:
//   this.state = {    // Só podemos utilizar um this.state, independente do número de funções
//     numberOfClicks1: 0,
//     numberOfClicks2: 0,
//     numberOfClicks3: 0,
//   }
// }

// handleClick() {
//   this.setState((previousState, _props) => ({
//     numberOfClicks1: previousState.numberOfClicks1 + 1
//   }))
//   // console.log('The world is yours!', this)  //Acesso ao objeto this na função que você declarou
// }

// handleClick2() {
//   this.setState((previousState, _props) => ({
//     numberOfClicks2: previousState.numberOfClicks2 + 1
//   }))
//   // console.log('My country', this)
// }

// handleClick3() {
//   this.setState((previousState, _props) => ({
//     numberOfClicks3: previousState.numberOfClicks3 + 1
//   }))
//   // console.log('Scarface', this)
// }

// render() {
//   return (
//     <div>
//     <button onClick={this.handleClick}>Button 1 | Count = {this.state.numberOfClicks1}</button>
//     <button onClick={this.handleClick2}>Button 2 | Count = {this.state.numberOfClicks2}</button>
//     <button onClick={this.handleClick3}>Button 3 | Count = {this.state.numberOfClicks3}</button>
//     </div>
//   )
// }
// }

// export default App;


// 6 - Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

// 7 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)

    this.handleClick2 = this.handleClick2.bind(this)

    this.handleClick3 = this.handleClick3.bind(this)

// Primeiramente, defina um estado inicial para a contagem de cada botão:
  this.state = {    // Só podemos utilizar um this.state, independente do número de funções
    numberOfClicks1: 0,
    numberOfClicks2: 0,
    numberOfClicks3: 0,
    color1: 'yellow',
    color2: 'yellow',
    color3: 'yellow',
  }
}

handleClick() {
  this.setState((previousState, _props) => ({
    numberOfClicks1: previousState.numberOfClicks1 + 1
  }))
}

handleClick2() {
  this.setState((previousState, _props) => ({
    numberOfClicks2: previousState.numberOfClicks2 + 1
  }))
  // console.log('My country', this)
}

handleClick3() {
  this.setState((previousState, _props) => ({
    numberOfClicks3: previousState.numberOfClicks3 + 1
  }))
  // console.log('Scarface', this)
}

render() {
  return (
    <div>
    <button onClick={this.handleClick} data-position='0' style={{backgroundColor: this.state.color1[0]}}>Button 1 | Count = {this.state.numberOfClicks1}</button>
    <button onClick={this.handleClick2}>Button 2 | Count = {this.state.numberOfClicks2}</button>
    <button onClick={this.handleClick3}>Button 3 | Count = {this.state.numberOfClicks3}</button>
    </div>
  )
}
}

export default App;

