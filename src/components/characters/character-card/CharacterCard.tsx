import React from "react";
import Image from "next/image";
import { CharactersApiProps } from "@/interfaces/CharactersApi";

export const CharacterCard = ({
  image,
  name,
  species,
  origin,
  gender,
  status,
}: CharactersApiProps) => {
  return (
    <article
      className="p-6 shadow-lg rounded-2xl flex gap-4 bg-[#96f9dd]"
    >
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        priority
        className="w-40 h-40 object-cover object-center rounded-2xl"
      />
      <div>
        <h2 className="text-lg font-medium leading-4 text-[#02312c]">{name}</h2>
        <span className="text-base text-[#02312c]">{species}</span>
        <div className="my-2 text-[#02312c]">
          <span className="font-medium">Origin: {" "}</span>
          {origin.name}
        </div>
        <div className="my-2 text-[#02312c]">
          <span className="font-medium">Gender: {" "}</span>
          {gender}
        </div>
        <div className="my-2 text-[#02312c]">
          <span className="font-medium">Status: {" "}</span>
          {status}
        </div>
      </div>
    </article>
  )
}
