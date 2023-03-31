import { Character } from "@/store/modules/data/types";
import React from "react";
import { AnyAction, Dispatch } from "redux";
import { ActionReturnType } from "../CharactersSection/CharacterCard";

type FavouriteButtonType = {
  handleAddFavourite: (
    callback: Dispatch<AnyAction>,
    character: Character,
    data: Character[],
    deleteCallback: (character: Character) => ActionReturnType,
    addCallback: (character: Character) => ActionReturnType
  ) => void;
  dispatch: Dispatch<AnyAction>;
  character: Character;
  data: Character[];
  deleteCallback: (character: Character) => ActionReturnType;
  addCallback: (character: Character) => ActionReturnType;
};

function FavouriteButton({
  handleAddFavourite,
  dispatch,
  character,
  data,
  deleteCallback,
  addCallback,
}: FavouriteButtonType) {
  return (
    <button
      data-testid="test-favourite-button"
      onClick={() =>
        handleAddFavourite(
          dispatch,
          character,
          data,
          deleteCallback,
          addCallback
        )
      }
    >
      Favourite
    </button>
  );
}

export default FavouriteButton;
