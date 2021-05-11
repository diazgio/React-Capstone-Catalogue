/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Pokedex from '../containers/Pokedex';
import Pokemon from '../containers/Pokemon';
import CategoryTypes from '../containers/ByTypes';
import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} />} />
        <Route exact path="/types" component={CategoryTypes} />
        <Route
          exact
          path="/:pokemonId"
          render={(props) => <Pokemon {...props} />}
        />
      </Switch>
    </Router>
  </div>
);

export default App;
