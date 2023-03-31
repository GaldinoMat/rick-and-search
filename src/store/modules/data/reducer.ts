import { ApiLoad } from "./types";
import { Reducer } from "redux";

export const DATA_INITIAL_STATE: ApiLoad = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
  favourites: [],
};

const data: Reducer<ApiLoad> = (state = DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOAD_FOUND_RESULTS":
      const { info, results } = action.payload;

      return {
        ...state,
        info,
        results,
      };

    case "FAVOURITE_CHARACTER":
      const { character } = action.payload;

      if (state.favourites.length === 0) {
        return {
          ...state,
          favourites: [character],
        };
      }

      const foundFavourite = state.favourites.find(
        (favorite) => favorite?.id === character?.id
      );

      if (!foundFavourite) {
        return {
          ...state,
          favourites: [...state.favourites, character],
        };
      }

      return {
        ...state,
      };
    case "LOAD_FAVOURITES":
      const { favourites } = action.payload;

      return {
        ...state,
        favourites,
      };

    case "SAVE_FAVOURITES":
      window.localStorage.setItem(
        "favourites",
        JSON.stringify(state?.favourites)
      );

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default data;
