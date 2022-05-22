import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Search Bar</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Movie: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">Search</button>
        </form>
        {this.props.movies ? (
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {this.props.movies.map(movie => {
            return (
              <li key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title} ({movie.Year})
                </Link>
                <button
                  onClick={() => this.props.addMovieFavorite(movie)}
                  className="btn-fav"
                >
                  Favorite
                </button>
              </li>
            );
          })
         }
        </ul>
        ) : (
          <p>No movies found, please try to write the full and correct name of the movie</p>
        )
        }

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch){
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
