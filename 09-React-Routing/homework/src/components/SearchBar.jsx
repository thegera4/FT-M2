import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="searchBar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      document.querySelector(".form-control").value = "";
    }}>
      <input
        type="text"
        placeholder="City..."
        className="form-control mr-sm-2"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button 
          type="submit" 
          className="btn btn-outline-light my-2 my-sm-0 search-btn"
        >
          <span> Add </span>
        </button>
    </form>
  );
}
