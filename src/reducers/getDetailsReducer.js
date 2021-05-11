const GET_DETAILS = 'GET_DETAILS';
const initialState = {
  pokedetail: [],
  loading: true,
};

const detailReducer = (state = initialState, action) => {
  if (action.type === GET_DETAILS) {
    return {
      pokedetail: action.detail,
      loading: false,
    };
  }
  return state;
};

export default detailReducer;
