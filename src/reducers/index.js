import { combineReducers } from 'redux';
import pokemonReducer from './getPokemonReducer';
import categoriesReducer from './getCategoriesReducer';
import detailReducer from './getDetailsReducer';
import nextPageReducer from './getNextPageReducer';

const rootReducer = combineReducers({
  page: nextPageReducer,
  pokemon: pokemonReducer,
  categories: categoriesReducer,
  detail: detailReducer,
});

export default rootReducer;
