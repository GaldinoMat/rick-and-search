import React from "react";

type FavouritesPaginationTypes = {
  index: number;
  handleChangeFavouritePage: (index: number) => void;
};

function FavouritesPaginationButton({
  handleChangeFavouritePage,
  index,
}: FavouritesPaginationTypes) {
  return (
    <button
      data-testid="test-favourite-pagination-button"
      onClick={() => handleChangeFavouritePage(index)}
      key={index}
    >
      {index + 1}
    </button>
  );
}

export default FavouritesPaginationButton;
