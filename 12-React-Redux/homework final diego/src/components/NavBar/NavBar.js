import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useCountMoviesFavorites } from "../../hooks/useCountMoviesFavorites";
import Logo from "../../logoHenry.png";

import "./Navbar.css";

export default function NavBar() {
  const { countFav } = useCountMoviesFavorites();

  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) {
        ref.current.src = "https://assets.soyhenry.com/henry-landing/assets/Henry/logo-white.png"
    }
  }, [ref]);

  return (
    <header className="navbar">
      <div>
        <img
          ref={ref}
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">{`Favoritas (${countFav})`}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
