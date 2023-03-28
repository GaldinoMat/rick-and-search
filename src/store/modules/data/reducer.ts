import { ApiLoad } from "./types";
import { Reducer } from "redux";

const DATA_INITIAL_STATE: ApiLoad = {
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
};

const data: Reducer<ApiLoad> = (
  state = DATA_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "LOAD_API":
      const { payload } = action;

      console.log(payload);

      return state;

    default:
      return state;
  }
};

export default data;
