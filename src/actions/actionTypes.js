const GET_POKEMON = 'GET_POKEMON';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_DETAILS = 'GET_DETAILS';
const GET_TYPE = 'GET_TYPE';
const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';

const fetchPokemonSuccess = pokemon => ({
  type: GET_POKEMON,
  pokemon,
});

const fetchCategoriesSuccess = categories => ({
  type: GET_CATEGORIES,
  categories,
});

const fetchDetailsSuccess = detail => ({
  type: GET_DETAILS,
  detail,
});

const fetchPokemonByCategorySuccess = types => ({
  type: GET_TYPE,
  types,
});

const setNewFilter = filter => ({
  type: SET_CURRENT_FILTER,
  filter,
});

export {
  fetchPokemonSuccess,
  fetchCategoriesSuccess,
  fetchDetailsSuccess,
  fetchPokemonByCategorySuccess,
  setNewFilter,
};
