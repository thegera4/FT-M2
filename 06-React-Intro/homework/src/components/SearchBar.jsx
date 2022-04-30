import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  
  return <div className="search-bar">
    <input className="search-input" placeholder="City..."></input>
    <button className="search-btn" onClick={() => props.onSearch("Adding city...")}>Add</button>
  </div>
};