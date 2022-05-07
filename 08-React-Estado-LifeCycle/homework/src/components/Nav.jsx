import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="logo-container">
        <img src={Logo} alt="App Logo" />
      </div>
      <p className="app-title">Henry - Weather App</p>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
