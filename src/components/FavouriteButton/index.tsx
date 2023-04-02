import { Character } from "@/store/modules/data/types";
import React from "react";
import { AnyAction, Dispatch } from "redux";
import {
  favouriteCharacter,
  removeFavorite,
  saveOnStorage,
} from "@/store/modules/data/actions";
import { useDispatch } from "react-redux";
import { FavouriteButtonComponent } from "./styles";

export type FavouriteButtonType = {
  character: Character;
  data: Character[];
  isFavorite: boolean;
};

export function handleAddFavourite(
  callback: Dispatch<AnyAction>,
  character: Character,
  data: Character[]
) {
  const foundCharacter = data?.find(
    (dataPiece) => dataPiece.id === character.id
  );

  if (foundCharacter) {
    callback(removeFavorite(character));
  } else {
    callback(favouriteCharacter(character));
  }

  callback(saveOnStorage());
}

function FavouriteButton({ character, data, isFavorite }: FavouriteButtonType) {
  const dispatch = useDispatch();

  return (
    <FavouriteButtonComponent
      data-testid="test-favourite-button"
      isfavorite={isFavorite.toString()}
      onClick={() => handleAddFavourite(dispatch, character, data)}
    />
  );
}

export default FavouriteButton;
