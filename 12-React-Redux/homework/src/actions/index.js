export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";

export function addMovieFavorite(title) {
    return { 
        type: ADD_MOVIE_FAVORITE, 
        payload: title
    };
}
  
export function removeMovieFavorite(id) {
    return { 
        type: REMOVE_MOVIE_FAVORITE, 
        payload: id 
    };
}

export function getMovies(title) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=` + title)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        })
        .catch(error => {console.log(error)});
    };
}
 
export function getMovieDetail(id){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_MOVIE_DETAILS, payload: json});
            })
            .catch(error => {console.log(error)});
    };
}
