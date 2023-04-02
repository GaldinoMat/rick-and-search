import React from "react";
import FavouriteButton from "../FavouriteButton";
import { Character } from "@/store/modules/data/types";
import {
  BioStatusComponent,
  AliveStatus,
  DeadStatus,
  UnknownStatus,
} from "./styles";

type BioStatusType = {
  data: Character;
  isFavorite: boolean;
  favouritesData: Character[];
  isRight: boolean;
};

function BioStatus({
  data,
  isFavorite,
  favouritesData,
  isRight,
}: BioStatusType) {
  return (
    <BioStatusComponent isright={isRight}>
      {data?.status === "Alive" ? (
        <AliveStatus>{data?.status}</AliveStatus>
      ) : data?.status === "Dead" ? (
        <DeadStatus>{data?.status}</DeadStatus>
      ) : (
        <UnknownStatus>{data?.status}</UnknownStatus>
      )}
      <FavouriteButton
        character={data}
        data={favouritesData}
        isFavorite={isFavorite}
      />
    </BioStatusComponent>
  );
}

export default BioStatus;
