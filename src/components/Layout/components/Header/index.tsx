import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeaderComponent = styled.header`
  padding: 1.25rem 2.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #ffc500;
  width: 100%;

  @media (min-width: 768px) {
    padding: 1.25rem 3.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1.25rem 2rem;
  }

  div {
    width: 100%;

    @media (min-width: 1024px) {
      width: 75%;
      margin: 0 auto;
    }
  }

  a {
    font-weight: bold;
    color: #520044;
    font-size: 1.125rem;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

function Header() {
  return (
    <HeaderComponent data-testid="header">
      <div>
        <Link href="/">Rick and Searchy!</Link>
      </div>
    </HeaderComponent>
  );
}

export default Header;
