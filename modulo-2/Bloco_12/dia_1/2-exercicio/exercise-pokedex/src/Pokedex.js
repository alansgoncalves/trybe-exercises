import React from 'react';
import Pokemon from './Pokemon';
import './index.css'


// Inicialmente, o componetente foi criado com classe conforme abaixo. Porém, no formato abaixo, será exibido todos os pokemons na tela, e queremos somente um:

// class Pokedex extends React.Component {
//     render() {
//         return (
//             <div className="pokedex">
//                 {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
//             </div>
//         );
//     }
// }

// Para exibir um pokemon de cada vez, temos que substituir a classe por uma arrow function e inseir o componente  <Pokemon />:

const Pokedex = () => {
    return (
      <div className="pokedex">
         <h1>Pokedex - Alan</h1>
        <Pokemon />
      </div>
    )
  }

export default Pokedex;