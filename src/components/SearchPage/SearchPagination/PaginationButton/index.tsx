import React from "react";
import { PaginationButtonComponent } from "./styles";

type PaginationButtonType = {
  testid: string;
  handlePageChange: (url: string) => void;
  pageNumber: number | null;
  url: string;
};

function PaginationButton({
  handlePageChange,
  pageNumber,
  testid,
  url,
}: PaginationButtonType) {
  return (
    <PaginationButtonComponent
      data-testid={testid}
      onClick={() => handlePageChange(url)}
    >
      {pageNumber}
    </PaginationButtonComponent>
  );
}

export default PaginationButton;
