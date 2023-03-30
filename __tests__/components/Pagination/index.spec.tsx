import Pagination, { matchNextPages } from "@/components/Pagination";
import store, { requestsMiddleware } from "@/store";
import { ApiLoad } from "@/store/modules/data/types";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";

const mockPageData = (next: string | null, prev: string | null) => {
  return {
    info: {
      count: 671,
      pages: 34,
      next,
      prev,
    },
    results: [],
  };
};

const makeSut = () => {
  const mockStore = configureStore(requestsMiddleware);
  return mockStore(store);
};

const renderPagination = (
  sutStore: MockStoreEnhanced<unknown, {}>,
  data: ApiLoad
) => {
  render(
    <Provider store={sutStore}>
      <Pagination data={data} />
    </Provider>
  );
};

describe("Pagination component", () => {
  test("should render pagination component", () => {
    const mockedStore = makeSut();
    renderPagination(
      mockedStore,
      mockPageData(
        "https://rickandmortyapi.com/api/character/?page=3",
        "https://rickandmortyapi.com/api/character/?page=1"
      )
    );

    const pagination = screen.getByTestId("test-pagination");
    expect(pagination).toBeInTheDocument();
  });

  test("should match next pages correctly", () => {
    const expectedResult = {
      current: 2,
      prev: 1,
      next: 3,
    };

    expect(
      matchNextPages(
        mockPageData(
          "https://rickandmortyapi.com/api/character/?page=3",
          "https://rickandmortyapi.com/api/character/?page=1"
        )
      )
    ).toEqual(expectedResult);
  });

  test("should return null for current page when next page is not present", () => {
    const expectedResult = {
      current: null,
      prev: 33,
      next: null,
    };

    expect(
      matchNextPages(
        mockPageData(null, "https://rickandmortyapi.com/api/character/?page=33")
      )
    ).toEqual(expectedResult);
  });

  test("should return null for prev page when previous page is not present", () => {
    const expectedResult = {
      current: 1,
      prev: null,
      next: 2,
    };

    expect(
      matchNextPages(
        mockPageData("https://rickandmortyapi.com/api/character/?page=2", null)
      )
    ).toEqual(expectedResult);
  });
});
