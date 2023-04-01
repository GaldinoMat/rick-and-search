import React from "react";
import styled from "styled-components";
import FavouriteButton from "../FavouriteButton";
import { Character } from "@/store/modules/data/types";

type BioStatusType = {
  data: Character;
  isFavorite: boolean;
  favouritesData: Character[];
  isRight: boolean;
};

const BioStatusComponent = styled.div`
  display: flex;
  justify-content: ${({ isright }) => {
    const isRightBool = isright === "true";
    return isRightBool ? "flex-end" : "flex-start";
  }};
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const AliveStatus = styled.p`
  padding: 0.5rem;
  width: 4.5625rem;
  background-color: #27ae60;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

const DeadStatus = styled.p`
  padding: 0.5rem;
  width: 4.5625rem;
  background-color: #eb5757;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

const UnknownStatus = styled.p`
  padding: 0.5rem;
  width: 5.5rem;
  background-color: #333333;
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

function BioStatus({
  data,
  isFavorite,
  favouritesData,
  isRight,
}: BioStatusType) {
  return (
    <BioStatusComponent isright={isRight.toString()}>
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
