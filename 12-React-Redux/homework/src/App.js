import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import HomeMovieCard from "./components/HomeMovieCard/HomeMovieCard";
//import NavBar from "./components/NavBar/NavBar";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar/PrimarySearchAppBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Header from "./components/header/Header";
function App() {
  return (
      <React.Fragment>
         {/*<Header />*/}
         <PrimarySearchAppBar />
          {/*<Route exact path="/" component={Buscador} /> */}
          <Route exact path="/" component={HomeMovieCard} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
      </React.Fragment>
  );
}

export default App;
