import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CircularProgress } from '@mui/material';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import  "../HomeMovies/HomeMovies.css";
import HomeInstructions from '../HomeInstructions/HomeInstructions';

export function HomeMovieCard(props) {

  const movieIsFavorite = (imdbID) => {
    return props.favorites.find((fav) => fav.id === imdbID) ? true : false;
  }
console.log(props.favorites)
  return (
    <div className="home-movies">
    {props.movies.length === 0 ?<HomeInstructions/> :
      props.movies ? (
      props.movies?.map(movie => {
        return(
            <Card sx={{ maxWidth: 345, maxHeight: 550}} key={movie.imdbID} >
            <CardActionArea >
            <CardMedia
                component="img"
                image={movie.Poster}
                alt={movie.Title}
                sx={{ maxWidth: 345, maxHeight: 360}}
            />
            <CardContent sx={{maxHeight: 100}}>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.Year}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions sx={{maxHeight: 100}}>
            <Button 
                sx={{maxHeight: 50}} 
                size="small" 
                color="primary" 
                onClick={() => props.addMovieFavorite(movie)}>
              {movieIsFavorite(movie.imdbID) ? (
              <FavoriteIcon /> 
              ) : (
              <FavoriteBorderIcon />
              ) }
                Add to favorites
            </Button>
            </CardActions>
        </Card>
        );
    })
    ) : (
      <div><CircularProgress/>Loading...</div>
    )

    }

  </div>
  )

}

export function mapStateToProps(state){
  return {
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites
  };
}

export function mapDispatchToProps(dispatch){
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMovieCard);