import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  MOVIE_DETAIL,
  REMOVE_FAV,
} from "../actions";

const initialState = JSON.parse(
  window.localStorage.getItem("reduxStore") ||
    JSON.stringify({
      moviesFavorites: [],
      moviesLoaded: [],
      movieDetail: {},
    })
);

function saveState(state) {
  window.localStorage.setItem("reduxStore", JSON.stringify(state));
}

export function reducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case ADD_MOVIE_FAVORITE: {
      newState = {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: JSON.parse(
          JSON.stringify(state.moviesFavorites)
        ).concat(payload),
      };
      break;
    }

    case GET_MOVIES: {
      newState = {
        ...JSON.parse(JSON.stringify(state)),
        moviesLoaded: payload.Search,
      };
      break;
    }

    case MOVIE_DETAIL: {
      newState = {
        ...JSON.parse(JSON.stringify(state)),
        movieDetail: payload,
      };
      break;
    }

    case REMOVE_FAV: {
      newState = {
        ...JSON.parse(JSON.stringify(state)),
        moviesFavorites: JSON.parse(
          JSON.stringify(state.moviesFavorites)
        ).filter((movie) => movie.id !== payload),
      };
      break;
    }

    default:
      newState = state;
  }

  saveState(newState);

  return newState;
}
