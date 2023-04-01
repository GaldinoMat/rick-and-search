import { Character } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";
import { AnyAction, Dispatch } from "redux";
import { ActionReturnType } from "../CharactersSection/CharacterCard";
import styled from "styled-components";

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

const FavouriteButtonComponent = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

function FavouriteButton({
  handleAddFavourite,
  dispatch,
  character,
  data,
  deleteCallback,
  addCallback,
}: FavouriteButtonType) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favouritesData = Array.from<Character>(
      JSON.parse(window.localStorage.getItem("favourites") as string)
    );
    setIsFavorite(
      favouritesData.some((dataChunk) => dataChunk?.id === character?.id)
    );
  }, [character?.id]);

  return (
    <FavouriteButtonComponent
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
    </FavouriteButtonComponent>
  );
}

export default FavouriteButton;
