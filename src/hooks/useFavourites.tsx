import { Character, CharacterState } from "@/store/modules/data/types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function useFavourites(data: Character) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favouritesData = useSelector<CharacterState, CharacterState>(
    (state) => state
  )?.characters?.favourites;

  useEffect(() => {
    const favouritesJson = JSON.parse(
      window.localStorage.getItem("favourites") as string
    );

    if (favouritesJson && favouritesJson !== null) {
      const favouritesJsonData = Array.from<Character>(favouritesJson);
      setIsFavorite(
        favouritesJsonData.some((favourite) => favourite?.id === data?.id)
      );
    }
  }, [data?.id, favouritesData]);

  return { isFavorite, favouritesData };
}

export default useFavourites;
