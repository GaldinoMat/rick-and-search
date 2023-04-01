import React from "react";
import styled from "styled-components";

type PaginationButtonType = {
  testid: string;
  handlePageChange: (url: string) => void;
  pageNumber: number | null;
  url: string;
};

const PaginationButtonComponent = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid #828282;
  color: #828282;
  background: transparent;
  font-weight: 700;
`;

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
