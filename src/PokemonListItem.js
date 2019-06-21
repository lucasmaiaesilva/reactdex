import React from 'react';
import { Link } from  'react-router-dom';
import pokeball from './pokeball.svg'; 

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
      <img src={pokeball} alt="pokeball" />
    </li>
  </Link>
)

export default PokemonListItem

