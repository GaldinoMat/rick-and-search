import { ApiLoad } from "./types";

export function fetchFromAPI(url: string) {
  return {
    type: "FETCH_FROM_API",
    request: {
      url,
      method: "get",
    },
    data: [],
  };
}

export function displayFoundResults({ results }: ApiLoad) {

  return {
    type: "DISPLAY_FOUND_RESULTS",
    payload: {
      results,
    },
  };
}
