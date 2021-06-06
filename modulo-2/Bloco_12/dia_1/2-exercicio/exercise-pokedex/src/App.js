import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <main className="App">
      <Pokedex pokemons={pokemons} />
    </main>
  );
}

export default App;