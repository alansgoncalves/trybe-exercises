import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super ()
    this.state = {
      corDoCarro: ' red'
    }
    this.trocaCor = this.trocaCor.bind(this)
  }

  trocaCor() {
    console.log(this)
    this.setState({
      corDoCarro: ' green'
    })
  }

  render() { 
    return (
      <div className="App">
        <h1>
          O meu carro é 
          <span style={{color: this.state.corDoCarro}}>{this.state.corDoCarro}</span>
          </h1>
        <button onClick={this.trocaCor}>Troca cor do carro</button>
      </div>
    );
  }
}
 
export default App;
