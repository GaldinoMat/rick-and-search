import Home from "@/pages";
import store, { requestsMiddleware } from "@/store";
import {
  displayFoundResults,
  fetchFromAPI,
} from "@/store/modules/data/actions";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { fireEvent, render, screen } from "@testing-library/react";
import data from "@/store/modules/data/reducer";
import React from "react";

const makeSut = () => {
  const mockStore = configureStore(requestsMiddleware);
  return mockStore(store);
};

const renderHome = (sutStore: MockStoreEnhanced<unknown, {}>) => {
  render(
    <Provider store={sutStore}>
      <Home />
    </Provider>
  );
};

const mockData = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [
    {
      created: "",
      episode: [""],
      gender: "",
      id: 0,
      image: "",
      location: { name: "", url: "" },
      name: "",
      origin: { name: "", url: "" },
      species: "",
      status: "",
      type: "",
    },
  ],
};

describe("Home page", () => {
  test("should properly display input text", () => {
    const mockedStore = makeSut();
    renderHome(mockedStore);

    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Ricky" } });
    expect(input.value).toBe("Ricky");
  });

  test("should properly display selected input", () => {
    const mockedStore = makeSut();
    renderHome(mockedStore);

    const select = screen.getByTestId("search-select") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "gender" } });
    expect(select.value).toBe("gender");
  });

  test("should properly click search button", () => {
    const mockedStore = makeSut();
    renderHome(mockedStore);

    const button = screen.getByTestId("search-go") as HTMLButtonElement;
    fireEvent.click(button);
  });

  test("should properly call action to display results", () => {
    const mockedStore = makeSut();
    renderHome(mockedStore);

    mockedStore.dispatch(displayFoundResults(mockData));

    const actions = mockedStore.getActions();
    expect(actions[0]).toBeTruthy();
  });

  test("should properly show search result", () => {
    const mockedStore = makeSut();
    renderHome(mockedStore);

    const successAction = {
      type: "DISPLAY_FOUND_RESULTS",
      payload: mockData, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(data(mockData, successAction)).toEqual(mockData);
  });
});
