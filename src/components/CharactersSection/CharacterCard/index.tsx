import { Character, CharacterState } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  favouriteCharacter,
  removeFavorite,
  saveOnStorage,
} from "@/store/modules/data/actions";
import { AnyAction, Dispatch } from "redux";
import FavouriteButton from "@/components/FavouriteButton";
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

  a {
    width: 100%;
    height: 8.65rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: relative;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
  }
`;

const CharacterTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharacterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CharacterName = styled.div`
  min-height: 2.2rem;
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
          sizes="(max-width: 768px) 8.65rem,
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
