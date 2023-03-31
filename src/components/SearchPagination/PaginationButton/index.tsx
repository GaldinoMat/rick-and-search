import React from "react";

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
    <button data-testid={testid} onClick={() => handlePageChange(url)}>
      {pageNumber}
    </button>
  );
}

export default PaginationButton;
