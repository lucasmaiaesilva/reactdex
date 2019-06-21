import React from 'react';
import PokemonListItem from './PokemonListItem';
import Fetch from './Fetch';
import './pokemonlist.css';

const App = () => {
  return (
    <div className="Pokemon-list">
      <Fetch
        url='https://pokeapi.co/api/v2/pokemon'
        render={({ results }) => (
          <div>
            <h1>Pokémon Pokedex</h1>
            <h2>React Dex</h2>
            {results.length > 0 && (
              <ul>
                {results.map(result => {
                  const url = result.url;
                  const urlArr = url.split('/');
                  const id = urlArr[urlArr.length - 2];
                  const linkUrl = `/pokemon/${id}`
                  return (
                    <PokemonListItem
                      name={result.name}
                      key={result.name}
                      linkUrl={linkUrl}
                    />
                  )
                })}
              </ul>
            )}
          </div>
        )}
      /> 
    </div>
  );
}

export default App;

