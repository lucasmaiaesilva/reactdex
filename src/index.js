import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonDescription from './PokemonDescription';
import PokemonList from './PokemonList';
import * as serviceWorker from './serviceWorker';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={PokemonList} />
        <Route path='/pokemon/:pokemonid' component={PokemonDescription} />
      </div>
    </Router>
  )
}

ReactDOM.render(
  <Router>
    <AppRouter />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
