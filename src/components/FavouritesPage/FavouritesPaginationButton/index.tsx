import React from "react";
import styled from "styled-components";

type FavouritesPaginationTypes = {
  index: number;
  currentPage: number;
  handleChangeFavouritePage: (index: number) => void;
};

const PaginationButtonComponent = styled.button<{
  currentPage: number;
  index: number;
}>`
  width: 3rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: ${({ currentPage, index }) =>
    currentPage === index + 1 ? "1px solid #092C4C" : "1px solid #828282"};
  color: ${({ currentPage, index }) =>
    currentPage === index + 1 ? "white" : "#828282"};
  background: ${({ currentPage, index }) =>
    currentPage === index + 1 ? "#092C4C" : "#transparent"};
  font-weight: 700;
`;

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
