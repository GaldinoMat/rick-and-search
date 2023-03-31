import CharactersSection from "@/components/CharactersSection";
import { loadFavourites } from "@/store/modules/data/actions";
import { CharacterState } from "@/store/modules/data/types";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";

function Favourites() {
  const data = useSelector<CharacterState, CharacterState>((state) => state)
    .characters?.favourites;

  const dispatch = useDispatch();

  useEffect(() => {
    const favouritesJson = JSON.parse(
      window.localStorage.getItem("favourites") as string
    );

    if (favouritesJson !== null) dispatch(loadFavourites(favouritesJson));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Rick and Searchy! | Favourites</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section data-testid="test-favourites">
        <div>
          <h1>Your favourites!</h1>
        </div>
        <div>
          {data?.length === 0 ? (
            <h2 data-testid="test-no-favourites">Sorry, no favorites here!</h2>
          ) : (
            <CharactersSection charactersData={data} />
          )}
        </div>
      </section>
    </>
  );
}

export default Favourites;