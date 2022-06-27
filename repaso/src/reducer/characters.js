import { SET_CHARACTERS } from "../action/charactersActions";

const INITIAL_STATE = []; // por defecto es undefined pero va a ser un array cuando tenga datos

export function charactersReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_CHARACTERS: {
      return payload
    }
    default:
      return state;
  }
}
