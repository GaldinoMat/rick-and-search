import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MockStoreEnhanced } from "redux-mock-store";
import { makeSut } from "../../store/modules/data/reducer.spec";
import Favourites from "@/pages/favourites";
import data from "@/store/modules/data/reducer";

const renderFavourites = (sutStore: MockStoreEnhanced<unknown, {}>) => {
  render(
    <Provider store={sutStore}>
      <Favourites />
    </Provider>
  );
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

      const successAction = {
        type: "LOAD_FAVOURITES",
        payload: [],
      };

      data(mockCleanData, successAction);

      const noFavouritesDisclaimer = screen.getByTestId("test-no-favourites");
      expect(noFavouritesDisclaimer).toBeInTheDocument();
    });
  });

  //   const mockArrayData: Character[] = [];
  //   const mockedStore = makeSut();

  //   render(
  //     <Provider store={mockedStore}>
  //       <CharactersSection charactersData={mockArrayData} />
  //     </Provider>
  //   );

  //   const charList = screen.getByTestId("test-character");
  //   expect(charList).toHaveLength(0);
  // });
});
