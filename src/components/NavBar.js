import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <h1>Pokedex First Gen</h1>
    <ul>
      <li>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/types">Types</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
