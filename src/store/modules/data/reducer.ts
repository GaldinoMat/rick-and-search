import { ApiLoad } from "./types";
import { Reducer } from "redux";

export const DATA_INITIAL_STATE: ApiLoad = {
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
};

const data: Reducer<ApiLoad> = (state = DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_FOUND_RESULTS":
      const { payload } = action;
      return {
        ...state,
        results: payload.results,
      };

    default:
      return state;
  }
};

export default data;
