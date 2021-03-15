import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export interface State {
  categories: string[];
  currentCategory: string;
  joke: string;
}

const initialState = {
  categories: [""],
  currentCategory: undefined,
  joke: undefined,
};

function reducer(state = initialState, action: { type: any; payload?: any }) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: [action.payload],
      };
    case "SET_CURRENT_CATEGORY":
      return { ...state, currentCategory: action.payload };
    case "REMOVE_CURRENT_CATEGORY":
      return { ...state, currentCategory: undefined };
    case "SET_JOKE":
      return { ...state, joke: action.payload };
    case "REMOVE_JOKE":
      return { ...state, joke: undefined };
    default:
      return state;
  }
}

export const store = createStore(reducer, composeWithDevTools());
