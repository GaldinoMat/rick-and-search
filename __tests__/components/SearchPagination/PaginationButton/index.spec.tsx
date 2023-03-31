import PaginationButton from "@/components/SearchPagination/PaginationButton";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

describe("Pagination Button component", () => {
  test("should fire an event click on pagination buttons", () => {
    const handleClick = jest.fn();
    render(
      <PaginationButton
        handlePageChange={handleClick}
        pageNumber={1}
        testid="test-prev-button"
        url="anyurl.com"
      />
    );

    const prevButton = screen.getByTestId("test-prev-button");

    fireEvent.click(prevButton);
    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith("anyurl.com");
  });
});
