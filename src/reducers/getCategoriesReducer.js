const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_TYPE = 'GET_TYPE';
const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';
const initialState = {
  categories: [],
  loading: true,
  fetchedCategories: {},
  currentFilter: 'All',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
        loading: false,
      };
    case GET_TYPE:
      return {
        ...state,
        fetchedCategories:
        {
          ...state.fetchedCategories,
          ...action.types,
        },
      };
    case SET_CURRENT_FILTER:
      return {
        ...state,
        currentFilter: action.filter,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
