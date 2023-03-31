import { Provider } from "react-redux";
import { MockStoreEnhanced } from "redux-mock-store";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { makeSut } from "../../store/modules/data/reducer.spec";
import Search from "@/pages/search";

const renderSearch = (sutStore: MockStoreEnhanced<unknown, {}>) => {
  render(
    <Provider store={sutStore}>
      <Search />
    </Provider>
  );
};

describe("Search page", () => {
  test("should properly display input text", () => {
    const mockedStore = makeSut();
    renderSearch(mockedStore);

    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Ricky" } });
    expect(input.value).toBe("Ricky");
  });

  test("should properly display selected input", () => {
    const mockedStore = makeSut();
    renderSearch(mockedStore);

    const select = screen.getByTestId("search-select") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "gender" } });
    expect(select.value).toBe("gender");
  });

  test("should properly click search button", () => {
    const mockedStore = makeSut();
    renderSearch(mockedStore);

    const button = screen.getByTestId("search-go") as HTMLButtonElement;
    fireEvent.click(button);
  });
});
