import styled from "styled-components";

export const HomeDisclaimer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;

  a {
    padding: 0.875rem 4.375rem;
    background-color: #1e0c1b;
    color: #f5f3f5;
    font-weight: 700;
    border-radius: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;