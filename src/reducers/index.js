import { combineReducers } from 'redux';
import pokemonReducer from './getPokemonReducer';
import categoriesReducer from './getCategoriesReducer';
import detailReducer from './getDetailsReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  categories: categoriesReducer,
  detail: detailReducer,
});

export default rootReducer;
