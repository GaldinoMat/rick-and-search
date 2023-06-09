import { Character } from "@/store/modules/data/types";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import { api } from "../api/api";
import Head from "next/head";
import CharacterCardImage from "@/components/CharacterPage/CharacterCardImage";
import CharacterText from "@/components/CharacterPage/CharacterText";
import { BioCharTitle } from "../../styles/character/styles";

type CharacterType = {
  data: Character;
};

function Character({ data }: CharacterType) {
  return (
    <>
      <Head>
        <title>Rick and Searchy! | Character Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CharacterCardImage data={data} />
        <BioCharTitle>{data?.name}</BioCharTitle>
        <CharacterText />
      </div>
    </>
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
