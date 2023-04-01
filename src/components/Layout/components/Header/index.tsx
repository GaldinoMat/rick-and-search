import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HeaderComponent = styled.header`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b284c;

  a {
    font-weight: bold;
    color: white;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

function Header() {
  return (
    <HeaderComponent data-testid="header">
      <Link href="/">Rick and Searchy!</Link>
    </HeaderComponent>
  );
}

export default Header;
