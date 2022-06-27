import axios from "axios";

export const SET_CHARACTERS = "characters/set";

export function setCharacters(data) {
  return {
    type: SET_CHARACTERS,
    payload: data,
  };
}

export function fetchCharacters() {
  return (dispatch) => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const { results } = response.data;

      dispatch(setCharacters(results));
    });
  };
}
