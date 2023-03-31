import { Character } from "@/store/modules/data/types";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  favouriteCharacter,
  saveOnStorage,
} from "@/store/modules/data/actions";
import { AnyAction, Dispatch } from "redux";
import FavouriteButton from "@/components/FavouriteButton";

type CharacterCardType = {
  character: Character;
};

export function handleAddFavourite(
  callback: Dispatch<AnyAction>,
  character: Character
) {
  callback(favouriteCharacter(character));
  callback(saveOnStorage());
}

function CharacterCard({ character }: CharacterCardType) {
  const dispatch = useDispatch();

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
      />
    </div>
  );
}

export default CharacterCard;
