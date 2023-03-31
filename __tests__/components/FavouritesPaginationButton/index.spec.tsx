import CharactersSection from "@/components/CharactersSection";
import { Character } from "@/store/modules/data/types";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MockStoreEnhanced } from "redux-mock-store";
import { makeSut } from "../../store/modules/data/reducer.spec";
import FavouritesPaginationButton from "@/components/FavouritesPaginationButton";

const renderFavouritePagination = (
  handleChangeFavouritePage: (index: number) => void,
  index: number
) => {
  render(
    <FavouritesPaginationButton
      handleChangeFavouritePage={handleChangeFavouritePage}
      index={index}
    />
  );
};

describe("Favourite Pagination", () => {
  test("should properly render pagination button", () => {
    const handleChangeFavouritePage = jest.fn();
    renderFavouritePagination(handleChangeFavouritePage, 1);

    const button = screen.getByTestId("test-favourite-pagination-button");

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
