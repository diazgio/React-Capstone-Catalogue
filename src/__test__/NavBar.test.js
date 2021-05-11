import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import NavBar from '../components/NavBar';

describe('Creates a component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <NavBar />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders a component', () => {
    render(<Router><NavBar /></Router>);
    const element = screen.getByText('Pokedex First Gen');
    expect(element).toBeInTheDocument();
  });
});
