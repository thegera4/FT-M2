import { combineReducers } from "redux";
import { charactersReducer } from "./characters";

import { SET_APP_IS_LOADING } from "../action/appActions";

const INITIAL_STATE = {
  isLoading: false,
};

function appReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_APP_IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  app: appReducer,
  characters: charactersReducer,
});
