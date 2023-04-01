import { Character } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";
import { AnyAction, Dispatch } from "redux";
import { ActionReturnType } from "../CharactersSection/CharacterCard";
import styled from "styled-components";
import { HeartFill } from "@styled-icons/bootstrap";

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
  isFavorite: boolean;
};

const FavouriteButtonComponent = styled(HeartFill)`
  position: absolute;
  top: 0.25rem;
  right: 0;
  width: 1.875rem;
  height: 1.875rem;
  transition: all .2s ease-out;
  fill: ${({ isfavorite }) => (isfavorite ? "#F44336" : "#F2994A")};
`;

function FavouriteButton({
  handleAddFavourite,
  dispatch,
  character,
  data,
  deleteCallback,
  addCallback,
  isFavorite,
}: FavouriteButtonType) {
  return (
    <FavouriteButtonComponent
      data-testid="test-favourite-button"
      isfavorite={isFavorite}
      onClick={() =>
        handleAddFavourite(
          dispatch,
          character,
          data,
          deleteCallback,
          addCallback
        )
      }
    />
  );
}

export default FavouriteButton;
