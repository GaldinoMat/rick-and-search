import React, { ReactNode } from "react";
import Header from "./components/Header";
import styled from "styled-components";

type LayoutType = {
  children: ReactNode;
};

const Main = styled.main`
  min-height: 100vh;
  background-color: white;
  color: #092C4C;
`;

function Layout({ children }: LayoutType) {
  return (
    <section data-testid="layout">
      <Header />
      <Main>{children}</Main>
    </section>
  );
}

export default Layout;
