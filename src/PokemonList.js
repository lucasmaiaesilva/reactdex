import React, { Component } from 'react';
import logo from './pokeball.svg';
import PokemonListItem from './PokemonListItem';
import Loading from './Loading';
import './pokemonlist.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      results: [],
      loading: true,
    }
  }
  componentDidMount() {
     fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => this.setState({
        results: data.results,
        loading: false,
     }))
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="Pokemon-list">
        <h1>Pokémon Pokedex</h1>
        <h2>React Dex</h2>
        {this.state.results.length > 0 && (
          <ul>
            {this.state.results.map(result => {
              const url = result.url;
              const urlArr = url.split('/');
              const id = urlArr[urlArr.length - 2];
              const linkUrl = `/pokemon/${id}`
              return (
                <PokemonListItem
                  name={result.name}
                  linkUrl={linkUrl}
                />
              )
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
