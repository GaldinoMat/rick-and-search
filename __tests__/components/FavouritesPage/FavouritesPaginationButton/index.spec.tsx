import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import FavouritesPaginationButton from "@/components/FavouritesPage/FavouritesPaginationButton";

const renderFavouritePagination = (
  handleChangeFavouritePage: (index: number) => void,
  index: number
) => {
  render(
    <FavouritesPaginationButton
      currentPage={1}
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
