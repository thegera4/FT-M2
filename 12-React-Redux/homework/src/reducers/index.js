import { GET_MOVIES, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAILS } from "../actions/index";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_MOVIE_FAVORITE:
            return {
                ...state, 
                moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: state.moviesFavourites.filter(movie => movie.imdbID !== action.payload.imdbID)
            }
        case GET_MOVIES:
            return{
                ...state,
                moviesLoaded: action.payload.Search
            }
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                movieDetail: action.payload
            }
        default:
            return state;
    }
}