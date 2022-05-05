import React from 'react';
import style from '../stylesheets/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div className={style.searchBar}>
    <input className={style.searchInput} placeholder="City..."></input>
    <button className={style.searchBtn} onClick={() => props.onSearch("Adding city...")}>Add</button>
  </div>
};