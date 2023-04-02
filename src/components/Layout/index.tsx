import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Main } from "./styles";

type LayoutType = {
  children: ReactNode;
};

function Layout({ children }: LayoutType) {
  return (
    <section data-testid="layout">
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </section>
  );
}

export default Layout;
