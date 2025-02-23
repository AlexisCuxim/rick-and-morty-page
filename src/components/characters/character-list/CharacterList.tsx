import { use } from "react";
import { CharactersApiProps } from "@/interfaces/CharactersApi";
import { getAllCharacters } from "@/services/charactes";
import { CharacterCard } from "@/components/characters/character-card";

export function CharacterList() {
  const characterList = use(getAllCharacters());

  return (
    <div className="py-12 grid grid-cols-12 gap-6">
      {characterList.results.map((character: CharactersApiProps, key: number) => (
        <div className="col-span-12 lg:col-span-6 xl:col-span-6" key={key}>
          <CharacterCard {...character} />
        </div>
      ))}
    </div>
  )
}
