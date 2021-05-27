import React from 'react';
import Pokemon from './Pokemon'
import Database from './data'

class Pokedex extends React.Component {
	render() {
      return (
        <div>
          {
          Database.map(({ name, type, averageWeight, image }) => {   //o map vai percorrer a lista de pokemon, e cada um que ele enctrar, vai criar um novo pra cada u
          return  <Pokemon name={name} type={type} averageWeight={averageWeight.value} image={image}/>
          })
          }
        </div>
      );
    }
  }
    
export default Pokedex;