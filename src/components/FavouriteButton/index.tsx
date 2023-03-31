import { Character } from "@/store/modules/data/types";
import React from "react";
import { AnyAction, Dispatch } from "redux";

type FavouriteButtonType = {
  handleAddFavourite: (
    callback: Dispatch<AnyAction>,
    character: Character
  ) => void;
  dispatch: Dispatch<AnyAction>;
  character: Character;
};

function FavouriteButton({
  handleAddFavourite,
  dispatch,
  character,
}: FavouriteButtonType) {
  return (
    <button
      data-testid="test-favourite-button"
      onClick={() => handleAddFavourite(dispatch, character)}
    >
      Favourite
    </button>
  );
}

export default FavouriteButton;
