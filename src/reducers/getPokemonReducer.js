import { PokemonActionTypes } from '../actions/actionTypes';

const initialState = {
  pokemon: [],
  isFetching: false,
  errorMessage: undefined,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
      };
    case PokemonActionTypes.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.pokemon,
        isFetching: false,
      };
    case PokemonActionTypes.FETCH_POKEMON_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
