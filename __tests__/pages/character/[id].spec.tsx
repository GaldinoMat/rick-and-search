import Character, {
  getStaticPaths,
  getStaticProps,
} from "@/pages/character/[id]";
import { render, screen } from "@testing-library/react";
import React from "react";
import { makeSut } from "../../store/store.spec";
import { Provider } from "react-redux";

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

describe("Character page", () => {
  test("should render when proper data is provided", () => {
    const mockedStore = makeSut();
    render(
      <Provider store={mockedStore}>
        <Character data={mockCharacter} />
      </Provider>
    );

    const character = screen.getByTestId("test-character-page");
    const characterName = screen.getByTestId("test-character-name");
    expect(character).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
  });

  test("should return truthy object on getStaticPaths", () => {
    const staticPaths = getStaticPaths({});

    expect(staticPaths).toBeTruthy();
  });

  test("should return data object on getStaticProps", async () => {
    const staticProps = await getStaticProps({ params: { id: "8" } });

    expect(staticProps).toBeTruthy();

    expect(staticProps).toEqual({ props: { data: mockCharacter } });
  });
});
