import { ApiLoad } from "./types";

export function fetchAPI() {
  return {
    type: "FETCH_API",
    request: {
      url: "/",
      method: "get",
    },
    data: [],
  };
}

export function loadAPI({ info, results }: ApiLoad) {
  return {
    type: "LOAD_API",
    payload: {
      info,
      results,
    },
  };
}
