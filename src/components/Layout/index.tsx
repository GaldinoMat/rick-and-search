import React, { ReactNode } from "react";
import Header from "./components/Header";

type LayoutType = {
  children: ReactNode;
};

function Layout({ children }: LayoutType) {
  return (
    <section data-testid="layout">
      <Header />
      <main>{children}</main>
    </section>
  );
}

export default Layout;
