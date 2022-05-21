import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.favorites.map(movie => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title} ({movie.Year})
                </Link>
                <button
                  onClick={() => this.props.removeMovieFavorite(movie)}
                  className="btn-remove"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    favorites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch){
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
