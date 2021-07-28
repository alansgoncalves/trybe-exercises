import React, {useState, useEffect} from 'react';
import useAbility from './hooks/useAbility';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10)
  const [abilities2, setPokeUrl2] = useAbility()

  const handleMorePokemons = () => {
    setLimit(limit + 10);
  }

  useEffect(() => {
    const getPokemons = async () => {
      const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=${limit}`
      const { results } = await fetch(endpoint).then((data) => data.json());
      setPokemons(results);
    }
    getPokemons();
  }, [limit])

  useEffect(() => {
    return () => alert('unmount') 
    }, []);

  return (
    <div>
      <h1>Trybe Go!</h1>
      <p>{abilities2.toString()}</p>
      <button onClick={handleMorePokemons}>Busca +10</button>
      <ul>
        {
          pokemons.map(({ name, url }) => <li key={name} onClick={() => setPokeUrl2(url)}>{name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
