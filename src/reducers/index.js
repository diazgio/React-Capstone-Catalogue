import { combineReducers } from 'redux';
import pokemonReducer from './getPokemonReducer';
import categoriesReducer from './getCategoriesReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  categories: categoriesReducer,
});

export default rootReducer;
