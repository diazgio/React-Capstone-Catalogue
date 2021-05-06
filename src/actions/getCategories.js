import axios from 'axios';
import { CategoriesActionTypes } from './actionTypes';

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_DATA_START,
});

export const fetchCategoriesSuccess = categories => ({
  type: CategoriesActionTypes.FETCH_DATA_SUCCESS,
  categories,
});

export const fetchCategoriesFailure = error => ({
  type: CategoriesActionTypes.FETCH_DATA_FAILURE,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchCategoriesStartAsync = () => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
    axios
      .get('')
      .then()
      .catch();
  };
};
