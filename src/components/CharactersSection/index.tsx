import { Character } from "@/store/modules/data/types";
import React from "react";
import CharacterCard from "./CharacterCard";

type CharactersType = {
  charactersData: Character[];
};

function CharactersSection({ charactersData }: CharactersType) {
  return (
    <section data-testid="test-characters-section">
      {charactersData?.map((character: Character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </section>
  );
}

export default CharactersSection;
