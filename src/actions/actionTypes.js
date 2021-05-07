const GET_POKEMON = 'GET_POKEMON';
const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_DETAILS = 'GET_DETAILS';

const fetchPokemonSuccess = pokemon => ({
  type: GET_POKEMON,
  pokemon,
});

const fetchCategoriesSuccess = categorie => ({
  type: GET_CATEGORIES,
  categorie,
});

const fetchDetailsSuccess = detail => ({
  type: GET_DETAILS,
  detail,
});

export { fetchPokemonSuccess, fetchCategoriesSuccess, fetchDetailsSuccess };
