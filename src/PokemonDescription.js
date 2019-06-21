import React from 'react';
import pokeball from './pokeball.svg'; 
import Fetch from './Fetch';
import { Link } from 'react-router-dom';
import './pokemondescription.css';

const PokemonDescription = ({ match }) => {
  const { pokemonid } = match.params
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonid}`
  return (
    <Fetch
      url={url}
      render={(pokemon) => (
        <div className="Pokemon-description">
          <div className="description-header">
            <span>
              <Link to="/">
                voltar
              </Link>
            </span>
            <img src={pokeball} alt="default" />
          </div>
          <h1>{pokemon.name}</h1>
          <div className="description">
            <div className="information">
              <div className="title">
                Types:
              </div>
              {pokemon.types.map(item => (
                <span key={item.type.name} className="text">
                  {item.type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default PokemonDescription;

