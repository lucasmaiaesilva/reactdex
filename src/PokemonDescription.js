import React, { Component } from 'react';
import pokeball from './pokeball.svg'; 
import Loading from './Loading';
import { Link } from 'react-router-dom';
import './pokemondescription.css';

class PokemonDescription extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      loading: true,
    }
  }
  componentDidMount() {
    const { pokemonid } = this.props.match.params
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonid}`
     fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        pokemon: data,
        loading: false,
     }))
  }
  render() {
    const { pokemon } = this.state
    if(this.state.loading) {
      return <Loading />
    }
    return (
      <div className="Pokemon-description">
        <div className="description-header">
          <span>
            <Link to="/">
              voltar
            </Link>
          </span>
          <img src={pokeball} />
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
    )
  }
}

export default PokemonDescription;

