import logo from './logo.svg';
import './App.css';
import VideoGame from './VideoGame';
import React from 'react';
import ListaGames from './Data';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <VideoGame games={ListaGames}/>
    </div>
  );
}
}

export default App;
