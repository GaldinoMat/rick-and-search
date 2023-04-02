import styled from "styled-components";

export const CharacterCardComponent = styled.div`
  width: 8.65rem;
  min-height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  position: relative;
  gap: 0.5rem;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);

  @media (min-width: 768px) {
    width: 12rem;
  }

  a {
    width: 100%;
    height: 8.65rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;

    @media (min-width: 768px) {
      height: 12rem;
    }
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const CharacterTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0.75rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const CharacterName = styled.div`
  min-height: 2.2rem;
  text-align: left;
`;