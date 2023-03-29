import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Layout/components/Header";
import Layout from "@/components/Layout";

describe("Header", () => {
  test("should render Layout", () => {
    render(<Layout>hello</Layout>);

    const layout = screen.getByTestId("layout");
    expect(layout).toBeInTheDocument();
  });
  test("should render Header with correct text", () => {
    render(<Header />);

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
});
