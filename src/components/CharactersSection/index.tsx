import { Character } from "@/store/modules/data/types";
import Image from "next/image";
import React from "react";

type CharactersType = {
  charactersData: Character[];
};

function CharactersSection({ charactersData }: CharactersType) {
  return (
    <section>
      {charactersData?.map((character: Character) => (
        <div key={character.id} data-testid="test-character">
          <Image
            src={character.image}
            alt={`${character.name}'s thumbnail image`}
            width={100}
            height={100}
            priority
          />
          <p>{character.name}</p>
          <p>{character.status}</p>
        </div>
      ))}
    </section>
  );
}

export default CharactersSection;
