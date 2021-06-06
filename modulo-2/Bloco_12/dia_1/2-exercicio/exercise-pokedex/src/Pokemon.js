import React from 'react';
import Data from './data'
import './grid.css'
import './index.css'

//Inicialmente, o componetente foi criado com classe conforme abaixo:

// class Pokemon extends React.Component {
//   render() {
//       const { name, type, averageWeight, image } = this.props.pokemon;

//       return (
//           <div className="pokemon">
//               <div>
//                   <p> {name} </p>
//                   <p> {type} </p>
//                   <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
//               </div>
//               <img src={image} alt={`${name} sprite`} />
//           </div>
//       );
//   }
// }

// export default Pokemon;

// E para que as regras de negócios funcionem, tivemos que utilizar Hooks, que são uma nova adição ao React 16.8, que permite o uso do state e outros recursos do React sem escrever uma classe.

const Pokemon = () => {
  let [ position, setPosition ] = React.useState(0);  //(0) é a posição do primeiro pokemon a ser exibido (Pokemon)

  //function para que o botão de next passe para o próximo pokemon
  function handleClick() {
    if ( position < Data.length - 1) {  // Se o position for menor que o tamanho da lista de pokemons do arquivo data.js (total 9)
      setPosition(position + 1) //Ao clicar no botão, será acrescentado + 1 para que passe para o próximo pokemon
    } else {
      setPosition(0)  // Quando chegar na última figura, o setPosition vai retornar para o elemento 0 da lista de pokemeons
    } 
  }
  
  function previousClick() {
    if ( position === 0 ) { //Se o position inicial for igual a zero
      setPosition(position = Data.length -1)  //Ao clicar no botão, será subtraído 1 da lista de pokemons do arquivo data.js (total 9), para que passe para o último pokemon da lista, no caso o Dragonair(index 8)
    } else {
      setPosition(position - 1) //A cada clique vai subtrair uma posição 
    }
  }

        return (
          <>
            <section className="container grid-8">
            <div className="pokemon grid-8">
                <div>
                  {/* Foi inserido Data[position] em cada chave para puxar a função criada acima */}
                    <p> {Data[position].name} </p>
                    <p> {Data[position].type} </p>
                    <p> {`Average weight: ${Data[position].averageWeight.value} ${Data[position].averageWeight.measurementUnit}`}</p>
                </div>
                <img src={Data[position].image} alt={Data[position].name} />
                </div>
                </section>
                <section className="button grid-12">
                <button onClick={ previousClick }>Anteriror</button>
                <button onClick={ handleClick }>Next</button>
            </section>
          </>
        );

}
export default Pokemon;