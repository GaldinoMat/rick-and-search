import store, { requestsMiddleware } from "@/store";
import {
  displayFoundResults,
  loadFavourites,
} from "@/store/modules/data/actions";
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

describe("Redux store", () => {
  test("should properly call action to display results", () => {
    const mockedStore = makeSut();

    mockedStore.dispatch(displayFoundResults(mockCleanData));

    const actions = mockedStore.getActions();
    expect(actions[0]).toBeTruthy();
  });

  test("should properly show search result", () => {
    const successAction = {
      type: "DISPLAY_FOUND_RESULTS",
      payload: mockCleanData,
    };
    expect(data(mockCleanData, successAction)).toEqual(mockCleanData);
  });

  test("should properly favourite character", () => {
    const mockReturnData = {
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
      favourites: [
        {
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
        },
      ],
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

    const successAction = {
      type: "FAVOURITE_CHARACTER",
      payload: mockCharacter,
    };
    expect(data(mockReturnData, successAction)).toEqual(mockReturnData);
  });

  test("should properly call action to load favourites", () => {
    const mockedStore = makeSut();

    const mockLoadedFavourite = [
      {
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
      },
    ];

    mockedStore.dispatch(loadFavourites(mockLoadedFavourite));

    const actions = mockedStore.getActions();
    expect(actions[0]).toBeTruthy();
  });

  test("should properly load from localStorage", () => {
    const mockReturnData = {
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
      favourites: [
        {
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
        },
      ],
    };

    const mockFavouritesData = {
      favourites: [
        {
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
        },
      ],
    };
    

    const successAction = {
      type: "LOAD_FAVOURITES",
      payload: mockFavouritesData,
    };
    expect(data(mockCleanData, successAction)).toEqual(mockReturnData);
  });
});
