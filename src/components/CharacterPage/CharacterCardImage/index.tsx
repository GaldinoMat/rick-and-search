import useFavourites from "@/hooks/useFavourites";
import React from "react";
import BioStatus from "../../BioStatus";
import Image from "next/image";
import Character from "@/pages/character/[id]";
import {
  CharacterCardContainer,
  DetailsContainer,
  CharacterTitleContainer,
  CharacterTitle,
  ImageContainer,
  BioStatusContainer,
  BioStatusTitle,
  BioInfo,
  BioInfoContainer,
  BioInfoTitle,
  BioInfoText,
} from "./styles";

type CharacterType = {
  data: Character;
};

function CharacterCardImage({ data }: CharacterType) {
  const { isFavorite, favouritesData } = useFavourites(data);

  const formatDate = (date: string): string => {
    if (date) {
      return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
    }

    return "";
  };

  const blurDataURL =
    "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAHAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAIRAAAQMEAQUAAAAAAAAAAAAAAQACAwQFCBETITJEUdL/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABoRAQEAAgMAAAAAAAAAAAAAAAECABIEMUH/2gAMAwEAAhEDEQA/AJLRkG+kgbELPTyxcXQOlc0k++0rKkyA3I4mxU+yT5DvhEVZrIqHeFxx4p1fM//Z";

  return (
    <CharacterCardContainer data-testid="test-character-page">
      <DetailsContainer>
        <CharacterTitleContainer>
          <CharacterTitle data-testid="test-character-name">
            {data?.name}
          </CharacterTitle>
        </CharacterTitleContainer>
      </DetailsContainer>
      <ImageContainer>
        <Image
          src={data?.image}
          fill
          alt={`${data?.name}'s image`}
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="(max-width: 768px) 24.875rem,
              (max-width: 1200px) 16.625rem,
              33vw"
        />
      </ImageContainer>
      <BioStatusContainer>
        <BioStatusTitle>Biological Information</BioStatusTitle>
        <BioStatus
          isRight={true}
          isFavorite={isFavorite}
          data={data}
          favouritesData={favouritesData}
        />
        <BioInfo>
          <BioInfoContainer>
            <BioInfoTitle>Gender:</BioInfoTitle>
            <BioInfoText>{data?.gender}</BioInfoText>
          </BioInfoContainer>
          <BioInfoContainer>
            <BioInfoTitle>Species:</BioInfoTitle>
            <BioInfoText>{data?.species}</BioInfoText>
          </BioInfoContainer>
          <BioInfoContainer>
            <BioInfoTitle>Origin:</BioInfoTitle>
            <BioInfoText>{data?.origin?.name}</BioInfoText>
          </BioInfoContainer>
          <BioInfoContainer>
            <BioInfoTitle>Location:</BioInfoTitle>
            <BioInfoText>{data?.location.name}</BioInfoText>
          </BioInfoContainer>
        </BioInfo>
        <BioInfo>
          <BioStatusTitle>Metadata Information</BioStatusTitle>
          <BioInfoContainer>
            <BioInfoTitle>Created at:</BioInfoTitle>
            <BioInfoText>{formatDate(data?.created)}</BioInfoText>
          </BioInfoContainer>
          <BioInfoContainer>
            <BioInfoTitle>Episodes total:</BioInfoTitle>
            <BioInfoText>{data?.episode.length}</BioInfoText>
          </BioInfoContainer>
        </BioInfo>
      </BioStatusContainer>
    </CharacterCardContainer>
  );
}

export default CharacterCardImage;
