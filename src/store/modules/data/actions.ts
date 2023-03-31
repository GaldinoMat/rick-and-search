import { ApiLoad, Character } from "./types";

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

export function loadFoundResults({ results, info }: ApiLoad) {
  return {
    type: "LOAD_FOUND_RESULTS",
    payload: {
      results,
      info,
    },
  };
}

export function favouriteCharacter(character: Character) {
  return {
    type: "FAVOURITE_CHARACTER",
    payload: {
      character,
    },
  };
}

export function saveOnStorage() {
  return {
    type: "SAVE_FAVOURITES",
    payload: {},
  };
}

export function loadFavourites(favourites: Character[]) {
  return {
    type: "LOAD_FAVOURITES",
    payload: {
      favourites,
    },
  };
}
