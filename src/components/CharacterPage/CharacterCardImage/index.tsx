import useFavourites from "@/hooks/useFavourites";
import data from "@/store/modules/data/reducer";
import React from "react";
import styled from "styled-components";
import BioStatus from "../../BioStatus";
import Image from "next/image";
import Character from "@/pages/character/[id]";

const CharacterCardContainer = styled.div`
  padding: 2.125rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 6px 10px 0 rgba(30, 12, 27, 0.1);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    float: right;
    clear: right;
    width: 19.875rem;
    height: auto;
    margin: 0 5px 10px 20px;
    border: 1px solid #092c4c;
    border-collapse: collapse;
    box-shadow: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 15.375rem;
  height: 15.375rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 16.625rem;
    height: 22.25rem;
  }

  img {
    border-radius: 0.5rem;
  }
`;

const DetailsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CharacterTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterTitle = styled.h1`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const BioStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BioStatusTitle = styled.h2`
  font-size: 1.125rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.375rem;
  }
`;

const BioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BioInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BioInfoTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const BioInfoText = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

type CharacterType = {
  data: Character;
};

function CharacterCardImage({ data }: CharacterType) {
  const { isFavorite, favouritesData } = useFavourites(data);

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
            <BioInfoText>{data?.created}</BioInfoText>
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
