import React, { ReactNode } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Background from "public/Site-background-light.webp";
import Footer from "./components/Footer";

type LayoutType = {
  children: ReactNode;
};

const Main = styled.main`
  min-height: 100vh;
  background-color: #f5f3f5;
  color: #1e0c1b;
  padding: 1.5rem 2rem;

  @media (min-width: 768px) {
    padding: 0;
    padding: 4.625rem 2rem;
    background-color: transparent;
    background-image: url(${Background.src});
  }
`;

const Container = styled.section`
  min-height: auto;

  @media (min-width: 768px) {
    padding: 2.5rem 2.25rem;
    background-color: #f5f3f5;
    width: 95%;
    margin: 0 auto;
    border-radius: 0.25rem;
  }

  @media (min-width: 1024px) {
    width: 75%;
  }
`;

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
