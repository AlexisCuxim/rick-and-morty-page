import { use } from 'react';
import Image from 'next/image';
import { CharactersApiProps } from '@/interfaces/CharactersApi';
import { getAllCharacters } from '@/services/charactes';

export function CharacterList() {
  const characterList = use(getAllCharacters());

  return (
    <div className="py-12 grid grid-cols-12 gap-6">
      {characterList.results.map((character: CharactersApiProps, key: number) => (
        <article
          className="col-span-12 md:col-span-6 xl:col-span-4 p-6 shadow-lg rounded-2xl flex gap-4"
          key={key}
        >
          <Image
            src={character.image}
            alt={character.name}
            width={150}
            height={150}
            priority
            className="w-40 h-40 object-cover object-center rounded-2xl"
          />
          <div>
            <h2 className="text-lg font-medium leading-4">{character.name}</h2>
            <span className="text-base text-gray-800">{character.species}</span>
            <div className="my-2">
              <span className="font-medium">Origin: {" "}</span>
              {character.origin.name}
            </div>
            <div className="my-2">
              <span className="font-medium">Gender: {" "}</span>
              {character.gender}
            </div>
            <div className="my-2">
              <span className="font-medium">Status: {" "}</span>
              {character.status}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
