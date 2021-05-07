/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Pokedex 2021</h1>
      <ul>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
