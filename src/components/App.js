import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import './App.scss';

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
    </Router>
  </div>
);

export default App;
