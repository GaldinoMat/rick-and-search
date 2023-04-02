import React from "react";
import styled from "styled-components";
import { PaginationButtonComponent } from "./styles";

type FavouritesPaginationTypes = {
  index: number;
  currentPage: number;
  handleChangeFavouritePage: (index: number) => void;
};

function FavouritesPaginationButton({
  handleChangeFavouritePage,
  index,
  currentPage,
}: FavouritesPaginationTypes) {
  return (
    <PaginationButtonComponent
      data-testid="test-favourite-pagination-button"
      onClick={() => handleChangeFavouritePage(index)}
      key={index}
      index={index}
      currentPage={currentPage}
    >
      {index + 1}
    </PaginationButtonComponent>
  );
}

export default FavouritesPaginationButton;
