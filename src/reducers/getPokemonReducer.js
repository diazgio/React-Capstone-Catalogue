const GET_POKEMON = 'GET_POKEMON';
const initialState = {
  pokemon: [],
};

const pokemonReducer = (state = initialState, action) => {
  if (action.type === GET_POKEMON) {
    return action.pokemon;
  }
  return state;
};

export default pokemonReducer;
