import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HomeDisclaimer = styled.section`
  padding-top: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;

  a {
    padding: .875rem 4.375rem;
    background-color: #092C4C;
    color: white;
    font-weight: 700;
    border-radius: .5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

function HomeTitle() {
  return (
    <HomeDisclaimer data-testid="test-home">
      <div>
        <Title>Search through 826 characters info in 42 pages</Title>
      </div>
      <Link href="/search">Search!</Link>
    </HomeDisclaimer>
  );
}

export default HomeTitle;
