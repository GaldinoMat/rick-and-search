import { ApiLoad } from "./types";
import { Reducer } from "redux";

export const DATA_INITIAL_STATE: ApiLoad = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [
    {
      created: "",
      episode: [""],
      gender: "",
      id: 0,
      image: "",
      location: { name: "", url: "" },
      name: "",
      origin: { name: "", url: "" },
      species: "",
      status: "",
      type: "",
    },
  ],
  favourites: [],
};

const data: Reducer<ApiLoad> = (state = DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_FOUND_RESULTS":
      const { info, results } = action.payload;

      return {
        ...state,
        info,
        results,
      };

    case "FAVOURITE_CHARACTER":
      const { character } = action.payload;

      if (!state.favourites) {
        return {
          ...state,
          favourites: [character],
        };
      } else {
        return {
          ...state,
          favourites: [...state.favourites, character],
        };
      }
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
