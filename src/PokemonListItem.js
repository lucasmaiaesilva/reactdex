import React from 'react';
import { Link } from  'react-router-dom';

const PokemonListItem = ({ linkUrl, name }) => (
  <Link to={linkUrl}>
    <li>
      <div className="name">
        <strong>{ name }</strong>
        <div className="type">
          <span>Grass</span>
          <span>Poison</span>
        </div>
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
    </li>
  </Link>
)

export default PokemonListItem

