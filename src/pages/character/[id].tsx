import { Character } from "@/store/modules/data/types";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import { api } from "../api/api";

type CharacterType = {
  data: Character;
};

function Character({ data }: CharacterType) {
  return (
    <section data-testid="test-character-page">
      <h1 data-testid="test-character-name">{data?.name}</h1>
      <p>{data?.species}</p>
      <p>{data?.gender}</p>
      <p>{data?.status}</p>
      <p>{data?.created}</p>
      <p>Episodes total: {data?.episode.length}</p>
      <p>Origin {data?.origin?.name}</p>
      <p>Location: {data?.location.name}</p>
    </section>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get(`/${params?.id}`);

  return {
    props: { data },
  };
};

export default Character;
