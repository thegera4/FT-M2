import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState("");

  const inputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <form className="searchBar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
      document.querySelector(".form-control").value = "";
    }}>
      <input 
      type="text" placeholder="City..." 
      className="form-control mr-sm-2"
      onChange={(e) => inputChange(e)}  
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
