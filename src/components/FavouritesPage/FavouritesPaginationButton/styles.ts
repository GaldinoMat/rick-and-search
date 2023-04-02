import styled from "styled-components";

export const PaginationButtonComponent = styled.button<{
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