import { Character } from "@/store/modules/data/types";
import React from "react";
import { AnyAction, Dispatch } from "redux";
import styled from "styled-components";
import { HeartFill } from "@styled-icons/bootstrap";
import {
  favouriteCharacter,
  removeFavorite,
  saveOnStorage,
} from "@/store/modules/data/actions";
import { useDispatch } from "react-redux";

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

const FavouriteButtonComponent = styled(HeartFill)`
  top: 0.25rem;
  right: 0;
  width: 1.875rem;
  height: 1.875rem;
  transition: all 0.2s ease-out;
  fill: ${({ isfavorite }) => {
    const favoriteBool = isfavorite === "true";
    return favoriteBool ? "#F44336" : "#520044";
  }};
`;

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
