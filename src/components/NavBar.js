/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Pokedex 2021</h1>
      <ul>
        <li>
          <Link to="/">Home |</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
