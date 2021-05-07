import axios from 'axios';
import { PokemonActionTypes } from './actionTypes';

export const fetchPokemonStart = () => ({
  type: PokemonActionTypes.FETCH_POKEMON_START,
});

export const fetchPokemonSuccess = pokemon => ({
  type: PokemonActionTypes.FETCH_POKEMON_SUCCESS,
  pokemon,
});

export const fetchPokemonFailure = error => ({
  type: PokemonActionTypes.FETCH_POKEMON_FAILURE,
  error,
});
// eslint-disable-next-line arrow-body-style
export const fetchPokemonAsync = id => {
  return dispatch => {
    dispatch(fetchPokemonStart());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => dispatch(fetchPokemonSuccess(res.data.results)))
      .catch(error => dispatch(fetchPokemonFailure(error)));
  };
};
