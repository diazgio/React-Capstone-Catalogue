import { combineReducers } from 'redux';
import pokemonReducer from './getPokemonReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
