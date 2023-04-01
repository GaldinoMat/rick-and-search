import { Character } from "@/store/modules/data/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useFavourites from "@/hooks/useFavourites";
import BioStatus from "@/components/BioStatus";

type CharacterCardType = {
  character: Character;
};

export type ActionReturnType = {
  type: string;
  payload: CharacterCardType;
};

const CharacterCardComponent = styled.div`
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

const CharacterTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0.75rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const CharacterName = styled.div`
  min-height: 2.2rem;
  text-align: left;
`;

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
