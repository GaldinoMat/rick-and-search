import { Character } from "@/store/modules/data/types";
import React from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import { CharacterCards } from "./styles";

type CharactersType = {
  charactersData: Character[];
};

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
