import { Character, CharacterState } from "@/store/modules/data/types";
import React from "react";
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

type CharacterCardType = {
  character: Character;
};

export type ActionReturnType = {
  type: string;
  payload: {
    character: Character;
  };
};

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

  const data = useSelector<CharacterState, CharacterState>((state) => state)
    ?.characters?.favourites;

  return (
    <div>
      <Link href={`/character/${character.id}`} data-testid="test-character">
        <Image
          src={character.image}
          alt={`${character.name}'s thumbnail image`}
          width={100}
          height={100}
          priority
        />
        <p>{character.name}</p>
        <p>{character.status}</p>
      </Link>
      <FavouriteButton
        handleAddFavourite={handleAddFavourite}
        dispatch={dispatch}
        character={character}
        data={data}
        addCallback={favouriteCharacter}
        deleteCallback={removeFavorite}
      />
    </div>
  );
}

export default CharacterCard;
