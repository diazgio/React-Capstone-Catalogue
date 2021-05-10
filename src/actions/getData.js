/* eslint-disable arrow-body-style */
import axios from 'axios';
import {
  fetchNexTPagePokemonSuccess,
  fetchPokemonSuccess,
  fetchDetailsSuccess,
  fetchCategoriesSuccess,
  fetchPokemonByCategorySuccess,
} from './actionTypes';
import { NormalizerData, NormalizerPokemons } from './NormalizerData';

const fetchNextPagePokemon = url => {
  return dispatch => {
    axios
      .get(url)
      .then(res => dispatch(fetchNexTPagePokemonSuccess(res.data)))
      .catch(error => { throw new Error(error); });
  };
};

const fetchPokemonAsync = url => {
  return dispatch => {
    axios
      .get(url)
      .then(res => dispatch(fetchPokemonSuccess(NormalizerData(res.data.results))))
      .catch(error => { throw new Error(error); });
  };
};

const fetchPokemonDetails = id => {
  return dispatch => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(resp => dispatch(fetchDetailsSuccess(resp.data)))
      .catch(error => { throw new Error(error); });
  };
};

const fetchCategoriesStartAsync = () => {
  return dispatch => {
    axios
      .get('https://pokeapi.co/api/v2/type/')
      .then(res => dispatch(fetchCategoriesSuccess(res.data.results)))
      .catch(error => { throw new Error(error); });
  };
};

const fetchPokemonByCategory = (url, name) => async dispatch => {
  try {
    const apidata = await axios
      .get(url)
      .then(resp => (resp.data));
    dispatch(fetchPokemonByCategorySuccess(NormalizerPokemons(apidata, name)));
  } catch (error) {
    throw new Error(error);
  }
};

export {
  fetchNextPagePokemon,
  fetchPokemonAsync,
  fetchPokemonDetails,
  fetchCategoriesStartAsync,
  fetchPokemonByCategory,
};
