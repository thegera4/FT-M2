import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {

    componentDidMount(movieID){
    // usando destructuring
    //const { match: { params: { id }}} = this.props;
    // manera convencional
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
    }

    render() {
        return (
          this.props.movieDetail ? (
            <div>
                <p>Movie Details: </p>
                <div className='container'>
                  <h2 className="title">
                    {this.props.movieDetail.Title}
                    <span>{this.props.movieDetail.Rated}</span>
                  </h2>
                  <h3 className='subtitle'>{this.props.movieDetail.Year}</h3>
                  <p className='description'>{this.props.movieDetail.Plot}</p>
                  <div className="container2">
                    <img id="img" src={this.props.movieDetail.Poster} alt="Poster" />
                    <ul className='column description'>
                      <li>Genre: {this.props.movieDetail.Genre}</li>
                      <li>Director: {this.props.movieDetail.Director}</li>
                      <li>Runtime: {this.props.movieDetail.Runtime}</li>
                      <li>Writer: {this.props.movieDetail.Writer}</li>
                      <li>Actors: {this.props.movieDetail.Actors}</li>
                  </ul>
                  </div>
                </div>
            </div>
          ) : (
            <div>Loading...</div>
          )
        );
    }
}

function mapStateToProps(state){
    return {
      movieDetail: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch){
    return {
      getMovieDetail: movie => dispatch(getMovieDetail(movie)),
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Movie);