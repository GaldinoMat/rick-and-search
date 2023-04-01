import CharacterCard from "@/components/CharactersSection/CharacterCard";
import FavouriteButton from "@/components/FavouriteButton";
import { Character } from "@/store/modules/data/types";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MockStoreEnhanced } from "redux-mock-store";
import { makeSut } from "../../../store/modules/data/reducer.spec";

const mockCharacter = {
  created: "2017-11-04T20:03:34.737Z",
  episode: ["https://rickandmortyapi.com/api/episode/28"],
  gender: "Male",
  id: 8,
  image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  name: "Adjudicator Rick",
  origin: { name: "unknown", url: "" },
  species: "Human",
  status: "Dead",
  type: "",
  url: "https://rickandmortyapi.com/api/character/8",
};

const renderChar = (
  sutStore: MockStoreEnhanced<unknown, {}>,
  mockedCharacter: Character
) => {
  render(
    <Provider store={sutStore}>
      <CharacterCard character={mockedCharacter} />
    </Provider>
  );
};

describe("Character Card", () => {
  test("should properly render character data", () => {
    const mockedStore = makeSut();
    renderChar(mockedStore, mockCharacter);
    const char = screen.getByTestId("test-character");
    expect(char).toBeInTheDocument();
  });

  test("should call handleAddFavourite", () => {
    const mockedStore = makeSut();
    renderChar(mockedStore, mockCharacter);

    const mockFavoriteCharacters = [
      {
        created: "2017-11-04T20:03:34.737Z",
        episode: ["https://rickandmortyapi.com/api/episode/28"],
        gender: "Male",
        id: 8,
        image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        name: "Adjudicator Rick",
        origin: { name: "unknown", url: "" },
        species: "Human",
        status: "Dead",
        type: "",
        url: "https://rickandmortyapi.com/api/character/8",
      },
    ];

    render(
      <Provider store={mockedStore}>
        <FavouriteButton
          isFavorite
          character={mockCharacter}
          data={mockFavoriteCharacters}
        />
      </Provider>
    );

    const favButtons = screen.getAllByTestId("test-favourite-button");

    fireEvent.click(favButtons[0]);
  });
});
