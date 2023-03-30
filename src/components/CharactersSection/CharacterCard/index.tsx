import { Character } from "@/store/modules/data/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type CharacterCardType = {
  character: Character;
};

function CharacterCard({ character }: CharacterCardType) {
  return (
    <Link href={`/character/${character.id}`} data-testid="test-character">
      <Image
        src={character.image}
        alt={`${character.name}'s thumbnail image`}
        width={100}
        height={100}
        priority
      />
      <p>{character.name}</p>
      <p>{character.status}</p>
    </Link>
  );
}

export default CharacterCard;
