import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link to='/'>
        <div className="logo-container">
          <img src={Logo} alt="App Logo" />
        </div>
        <p className="app-title">Henry - Weather App</p>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
      <Link to='/about'>
        <span className="about-link">About</span>
      </Link>
    </nav>
  );
};

export default Nav;
