import { Character } from "@/store/modules/data/types";
import React from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

type CharactersType = {
  charactersData: Character[];
};

const CharacterCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.875rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 1.875rem;
    padding: 0 2.25rem;
  }
`;

function CharactersSection({ charactersData }: CharactersType) {
  return (
    <CharacterCards data-testid="test-characters-section">
      {charactersData?.map((character: Character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </CharacterCards>
  );
}

export default CharactersSection;
