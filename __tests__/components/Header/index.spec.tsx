import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  test("should render Header", () => {
    render(<Header />);

    const header = screen.getByTestId("header")
    expect(header).toBeInTheDocument()
  });
  test("should render Header with correct text", () => {
    render(<Header />);

    const header = screen.getByTestId("header")
    expect(header).toHaveTextContent("Hello")
  });
});
