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

type CharacterCardType = {
  character: Character;
};

export type ActionReturnType = {
  type: string;
  payload: CharacterCardType;
};

const CharacterCardComponent = styled.div`
  width: 8.65rem;
  min-height: 13rem;
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

export function handleAddFavourite(
  callback: Dispatch<AnyAction>,
  character: Character,
  data: Character[],
  deleteCallback: (character: Character) => ActionReturnType,
  addCallback: (character: Character) => ActionReturnType
) {
  const foundCharacter = data?.find(
    (dataPiece) => dataPiece.id === character.id
  );

  if (foundCharacter) {
    callback(deleteCallback(character));
  } else {
    callback(addCallback(character));
  }

  callback(saveOnStorage());
}

function CharacterCard({ character }: CharacterCardType) {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const data = useSelector<CharacterState, CharacterState>((state) => state)
    ?.characters?.favourites;

  useEffect(() => {
    const favouritesJsonData = Array.from<Character>(
      JSON.parse(window.localStorage.getItem("favourites") as string)
    );
    setIsFavorite(
      favouritesJsonData.some((favourite) => favourite?.id === character?.id)
    );
  }, [character?.id, data]);

  return (
    <CharacterCardComponent>
      <Link href={`/character/${character.id}`} data-testid="test-character">
        <Image
          src={character.image}
          alt={`${character.name}'s thumbnail image`}
          fill
          priority
        />
      </Link>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <FavouriteButton
        isFavorite={isFavorite}
        handleAddFavourite={handleAddFavourite}
        dispatch={dispatch}
        character={character}
        data={data}
        addCallback={favouriteCharacter}
        deleteCallback={removeFavorite}
      />
    </CharacterCardComponent>
  );
}

export default CharacterCard;
