import store, { requestsMiddleware } from "@/store";
import { loadFoundResults, loadFavourites } from "@/store/modules/data/actions";
import configureStore from "redux-mock-store";
import data from "@/store/modules/data/reducer";

export const makeSut = () => {
  const mockStore = configureStore(requestsMiddleware);
  return mockStore(store);
};

const mockCleanData = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
  favourites: [],
};

const mockCharacter = {
  created: "2017-11-04T20:03:34.737Z",
  episode: ["https://rickandmortyapi.com/api/episode/28"],
  gender: "Male",
  id: 8,
  image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  name: "Adjudicator Rick",
  origin: { name: "unknown", url: "" },
  species: "Human",
  status: "Dead",
  type: "",
  url: "https://rickandmortyapi.com/api/character/8",
};

const mockReturnData = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
  favourites: [mockCharacter],
};

describe("Redux store", () => {
  test("should properly call action to display results", () => {
    const mockedStore = makeSut();

    mockedStore.dispatch(loadFoundResults(mockCleanData));

    const actions = mockedStore.getActions();
    expect(actions[0]).toBeTruthy();
  });

  test("should properly show search result", () => {
    const successAction = {
      type: "LOAD_FOUND_RESULTS",
      payload: mockCleanData,
    };
    expect(data(mockCleanData, successAction)).toEqual(mockCleanData);
  });

  test("should properly favourite character when favourites are empty", () => {
    const successAction = {
      type: "FAVOURITE_CHARACTER",
      payload: { character: mockCharacter },
    };
    expect(data(mockCleanData, successAction)).toEqual(mockReturnData);
  });

  test("should properly add favourite character when favourites are already populated", () => {
    const newFavouriteMock = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    };

    const newFavouritesMock = {
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      },
      results: [],
      favourites: [mockCharacter, newFavouriteMock],
    };

    const successAction = {
      type: "FAVOURITE_CHARACTER",
      payload: { character: newFavouriteMock },
    };
    expect(data(mockReturnData, successAction)).toEqual(newFavouritesMock);
  });

  test("should properly return same state when the a character is favorited again", () => {

    const successAction = {
      type: "FAVOURITE_CHARACTER",
      payload: { character: mockCharacter },
    };
    expect(data(mockReturnData, successAction)).toEqual(mockReturnData);
  });

  test("should properly call action to load favourites", () => {
    const mockedStore = makeSut();

    const mockLoadedFavourite = [mockCharacter];

    mockedStore.dispatch(loadFavourites(mockLoadedFavourite));

    const actions = mockedStore.getActions();
    expect(actions[0]).toBeTruthy();
  });

  test("should properly load from localStorage", () => {
    const mockFavouritesData = {
      favourites: [mockCharacter],
    };

    const successAction = {
      type: "LOAD_FAVOURITES",
      payload: mockFavouritesData,
    };
    expect(data(mockCleanData, successAction)).toEqual(mockReturnData);
  });

  test("should call save favourites action", () => {
    const successAction = {
      type: "SAVE_FAVOURITES",
      payload: {},
    };
    expect(data(mockReturnData, successAction)).toEqual(mockReturnData);
  });
});
