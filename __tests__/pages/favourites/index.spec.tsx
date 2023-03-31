import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MockStoreEnhanced } from "redux-mock-store";
import { makeSut } from "../../store/modules/data/reducer.spec";
import Favourites, { splitArray } from "@/pages/favourites";
import data from "@/store/modules/data/reducer";

const renderFavourites = (sutStore: MockStoreEnhanced<unknown, {}>) => {
  render(
    <Provider store={sutStore}>
      <Favourites />
    </Provider>
  );
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

describe("Favourites page", () => {
  test("should render favourites page", () => {
    const mockedStore = makeSut();
    renderFavourites(mockedStore);

    const favouritesPage = screen.getByTestId("test-favourites");
    expect(favouritesPage).toBeInTheDocument();
  });

  test("should show no results when no favourites are loaded", () => {
    const mockedStore = makeSut();
    renderFavourites(mockedStore);

    waitFor(() => {
      const successAction = {
        type: "LOAD_FAVOURITES",
        payload: [],
      };

      data(mockCleanData, successAction);

      const noFavouritesDisclaimer = screen.getByTestId("test-no-favourites");
      expect(noFavouritesDisclaimer).toBeInTheDocument();
    });
  });

  test("should show results when favourites are loaded", () => {
    const mockedStore = makeSut();
    renderFavourites(mockedStore);

    waitFor(() => {
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
        type: "LOAD_FAVOURITES",
        payload: [mockCharacter],
      };

      data(mockCleanData, successAction);

      const favouriteCharacterSection = screen.getByTestId(
        "test-characters-section"
      );
      expect(favouriteCharacterSection).toBeInTheDocument();
    });
  });

  test("should return a array of arrays when called", () => {
    const arr = Array.from({ length: 21 }, (_, i) => i + 1);
    const newArr = splitArray(arr);

    expect(newArr).toHaveLength(2);
  });
});
