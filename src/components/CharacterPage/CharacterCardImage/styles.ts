import styled from "styled-components";

export const CharacterCardContainer = styled.div`
  padding: 2.125rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    float: right;
    clear: right;
    width: 19.875rem;
    height: auto;
    margin: 0 5px 10px 20px;
    border: 1px solid #092c4c;
    border-collapse: collapse;
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    width: 21.875rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 15.375rem;
  height: 15.375rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 16.625rem;
    height: 22.25rem;
  }

  @media (min-width: 1024px) {
    width: 18.625rem;
    height: 22.25rem;
  }

  img {
    border-radius: 0.5rem;
  }
`;

export const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CharacterTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharacterTitle = styled.h1`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const BioStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BioStatusTitle = styled.h2`
  font-size: 1.125rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`;

export const BioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BioInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BioInfoTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const BioInfoText = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;