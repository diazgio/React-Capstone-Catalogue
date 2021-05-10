const GET_URL_NEXT_PAGE = 'GET_URL_NEXT_PAGE';
const initialState = {};

const nextPageReducer = (state = initialState, action) => {
  if (action.type === GET_URL_NEXT_PAGE) {
    return {
      ...action.page,
    };
  }
  return state;
};

export default nextPageReducer;
