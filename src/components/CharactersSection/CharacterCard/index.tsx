import { Character } from "@/store/modules/data/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useFavourites from "@/hooks/useFavourites";
import BioStatus from "@/components/BioStatus";
import {
  CharacterCardComponent,
  CharacterTitleContainer,
  CharacterInfoContainer,
  CharacterName,
} from "./styles";

type CharacterCardType = {
  character: Character;
};

export type ActionReturnType = {
  type: string;
  payload: CharacterCardType;
};

function CharacterCard({ character }: CharacterCardType) {
  const { favouritesData, isFavorite } = useFavourites(character);

  const blurDataURL =
    "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAIRAAAQMEAQUAAAAAAAAAAAAAAQACAwQFCBETITJEUdL/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABoRAQEAAgMAAAAAAAAAAAAAAAECABIEMUH/2gAMAwEAAhEDEQA/AJLRkG+kgbELPTyxcXQOlc0k++0rKkyA3I4mxU+yT5DvhEVZrIqHeFxx4p1fM//Z";

  return (
    <CharacterCardComponent>
      <Link href={`/character/${character.id}`} data-testid="test-character">
        <Image
          src={character.image}
          alt={`${character.name}'s thumbnail image`}
          fill
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
          sizes="(max-width: 768px) 9.1rem,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <CharacterTitleContainer>
        <CharacterInfoContainer>
          <CharacterName>
            <p>{character.name}</p>
          </CharacterName>
          <BioStatus
            isRight={false}
            isFavorite={isFavorite}
            data={character}
            favouritesData={favouritesData}
          />
        </CharacterInfoContainer>
      </CharacterTitleContainer>
    </CharacterCardComponent>
  );
}

export default CharacterCard;
