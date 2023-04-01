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
    padding: 0.875rem 4.375rem;
    background-color: #092c4c;
    color: white;
    font-weight: 700;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
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
