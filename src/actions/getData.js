import axios from 'axios';
import { fetchPokemonSuccess } from './actionTypes';

// eslint-disable-next-line arrow-body-style
const fetchPokemonAsync = () => {
  return dispatch => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => dispatch(fetchPokemonSuccess(res.data.results)))
      .catch(error => { throw new Error(error); });
  };
};

// const fetchCategoriesStartAsync = () => {
//   return dispatch => {
//     dispatch(fetchCategoriesStart());
//     axios
//       .get('')
//       .then()
//       .catch();
//   };
// };

// eslint-disable-next-line import/prefer-default-export
export { fetchPokemonAsync };
