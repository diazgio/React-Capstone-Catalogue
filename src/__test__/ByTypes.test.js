import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CategoryTypes from '../containers/ByTypes';

describe('Creates a component', () => {
  const middlewares = [thunk];
  // const array = [{ name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' }, { name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/' }];
  const initialState = {
    categories: [],
    loading: true,
    fetchedCategories: {},
    currentFilter: 'All',
  };
  const mockStore = configureStore(middlewares);
  let store;
  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <CategoryTypes />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><CategoryTypes /></Provider>);
    const element = screen.getByText('Please Select a Type of Pokemon');
    expect(element).toBeInTheDocument();
  });
});
