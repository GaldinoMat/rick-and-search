import Home from "@/pages";
import { Provider } from "react-redux";
import { MockStoreEnhanced } from "redux-mock-store";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { makeSut } from "../store/modules/data/reducer.spec";

const renderHome = (sutStore: MockStoreEnhanced<unknown, {}>) => {
  render(
    <Provider store={sutStore}>
      <Home />
    </Provider>
  );
};

describe("Home page", () => {
  test("should properly display input text", () => {
    const mockedStore = makeSut();
    renderHome(mockedStore);

    const homeGreetings = screen.getByTestId("test-home");
    expect(homeGreetings).toBeInTheDocument();
  });
});
