import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Pokedex from '../containers/Pokedex';

describe('Creates a component', () => {
  const middlewares = [thunk];
  const initialState = [];
  const mockStore = configureStore(middlewares);
  let store;
  it('renders correctly', () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <Pokedex />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    store = mockStore(initialState);
    render(<Provider store={store}><Pokedex /></Provider>);
    const element = screen.getByText('Pokemon');
    expect(element).toBeInTheDocument();
  });
});
