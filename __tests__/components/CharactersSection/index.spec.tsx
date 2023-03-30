import CharactersSection from "@/components/CharactersSection";
import { Character } from "@/store/modules/data/types";
import { render, screen } from "@testing-library/react";
import React from "react";

const renderCharList = (charactersData: Character[]) => {
  render(<CharactersSection charactersData={charactersData} />);
};

describe("Characters Section", () => {
  test("should properly render character data", () => {
    const mockArrayData = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
    ];
    renderCharList(mockArrayData);
    const charList = screen.getAllByTestId("test-character");
    expect(charList).toHaveLength(1);
  });
});
